const { conn } = require('../../database')
const { ObjectId } = require('mongodb');

const PostHouse = (req, res) => {
    let { [`_id`]: _id, ...doc } = req.body
    if (_id) {
        return res.status(500).json({
            success: false,
            msg: '_id need to be null on post'
        })
    }
    conn.collection('houses').find({ name: doc.name, exist: true }).toArray((err, files) => {
        if (files.length > 0) {
            return res.status(500).json({
                success: false,
                msg: 'house name already exist'
            })
        } else {
            let now = new Date().toISOString()
            doc = {
                ...doc,
                websiteInfo: {
                    ...doc.websiteInfo,
                    createAt: now,
                    lastedEdited: now,
                },
                exist: true
            }
            conn.collection('houses').insertOne(doc)
            return res.status(200).json({
                success: true,
                msg: 'house created'
            })
        }
    })

}

const ListHouse = (req, res) => {
    conn.collection('houses').find({ exist: true }).toArray((err, files) => {
        return res.status(200).json(files)
    })
}

const PatchHouse = (req, res) => {
    let { [`_id`]: _id, ...doc } = req.body
    conn.collection('houses').find({ name: doc.name, exist: true }).toArray((err, files) => {
        if (files.length > 0 && files[0]._id.toString() !== _id) {
            return res.status(500).json({
                success: false,
                msg: 'house name already exist'
            })
        }
        else {
            let websiteInfo = doc.websiteInfo
            websiteInfo.lastedEdited = new Date().toISOString()
            _id = ObjectId(_id)
            let objId = { _id }
            doc = {
                ...doc,
                websiteInfo
            }

            let newValue = { $set: doc };
            conn.collection('houses').findOneAndUpdate(objId, newValue, (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: false,
                        msg: err
                    })
                }
                return res.status(200).json({
                    success: true,
                    msg: 'house patched'
                })
            })
        }
    })


}

const SearchHouse = (req, res) => {
    let { province, pricestart, priceend, status } = req.query
    let searchData = {
        exist: true
    }

    if (province) {
        searchData = {
            ...searchData,
            'location.province': province
        }


    }
    if (status) {
        searchData = {
            ...searchData,
            status
        }
    }

    conn.collection('houses').find(searchData).toArray((err, files) => {

        let result = files.filter((item, index) => {
            let price = item.price
            if (priceend && pricestart) {
                if (price <= priceend && price >= pricestart) {
                    return item
                }
            }
            else if (pricestart) {
                if (price >= pricestart) {
                    return item
                }
            }
            else if (priceend) {
                if (price <= priceend) {
                    return item
                }
            }
            else {
                return item
            }

        })
        return res.status(200).json(result)
    })

}

const DeleteHouse = (req, res) => {

    let _id = ObjectId(req.params._id)
    let objId = { _id }
    let newValue = {
        $set: {
            exist: false,
            "websiteInfo.lastedEdited": new Date().toISOString()
        }
    };

    conn.collection('houses').findOneAndUpdate(objId, newValue, (err, doc) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                msg: err
            })
        }
        return res.status(200).json({
            success: true,
            msg: 'house deleted'
        })
    })

}

const ListSuggest = (req, res) => {
    let searchData = {
        exist: true,
        "websiteInfo.isSuggest": true
    }
    conn.collection('houses').find(searchData).toArray((err, files) => {
        return res.status(200).json(files)
    })

}

const FindHouse = (req, res) => {
    let name = req.params.name
    conn.collection('houses').find({ name, exist: true }).toArray((err, files) => {
        if (files.length > 0) {
            return res.status(200).json(files[0])
        }
        else {
            return res.status(403).json({
                success: false,
                msg: `given name doesn't exist`
            })
        }
    })
}

const InterestHouse = (req, res) => {
    let { name, email, phone, details, _id } = req.body
    if (name && email && phone && details && _id) {
        _id = ObjectId(req.params._id)
        let doc = {
            name,
            email,
            phone,
            details,
            _id
        }

        conn.collection('interest').insertOne(doc)

        return res.status(200).json({
            success: true,
            msg: 'posted interest'
        })
    }
    else {
        return res.status(500).json({
            success: false,
            msg: 'require information are not fully(require : name, email, phone, details, _id)'
        })
    }
}

const Subscribe = (req, res) => {
    let { email } = req.body
    if (!email) {
        return res.status(500).json({
            success: false,
            msg: 'this endpoint require email'
        })
    }
    conn.collection('subscribe').find({ email }).toArray((err, files) => {
        if (files.length > 0) {
            return res.status(500).json({
                success: false,
                msg: 'this email already subscribe'
            })
        }
        else {
            let doc = {
                email,
                subscribeAt: new Date().toISOString()
            }
            conn.collection('subscribe').insertOne(doc)
            return res.status(200).json({
                success: true,
                msg: `subscribed`
            })
        }
    })

}

module.exports = {
    PostHouse,
    ListHouse,
    DeleteHouse,
    ListSuggest,
    PatchHouse,
    SearchHouse,
    FindHouse,
    InterestHouse,
    Subscribe
}
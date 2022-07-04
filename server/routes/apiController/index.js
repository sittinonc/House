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
    conn.collection('houses').find({ name: doc.name }).toArray((err, files) => {
        console.log(files);
        if (files.length > 0) {
            return res.status(500).json({
                success: false,
                msg: 'house name already exist'
            })
        } else {
            let now = new Date().toISOString()
            doc = {
                ...doc,
                createAt: now,
                lastUpdate: now,
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
    _id = ObjectId(_id)
    let objId = { _id }
    doc = {
        ...doc,
        lastUpdate: new Date().toISOString()
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

const DeleteHouse = (req, res) => {

    let _id = ObjectId(req.params._id)
    let objId = { _id }
    let newValue = {
        $set: {
            exist: false,
            lastUpdate: new Date().toISOString()
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
    conn.collection('houses').find({ exist: true, isSuggest: true }).toArray((err, files) => {
        return res.status(200).json(files)
    })

}

module.exports = {
    PostHouse,
    ListHouse,
    DeleteHouse,
    ListSuggest,
    PatchHouse
}
const PostHouse = (req, res) => {
    res.send('post')
}

const ListHouse = (req, res) => {
    res.send('list')
}

const DeleteHouse = (req, res) => {
    res.send('delete')
}

const ListSuggest = (req, res) => {
    res.send('suggest')

}

module.exports = {
    PostHouse,
    ListHouse,
    DeleteHouse,
    ListSuggest
}
const { conn } = require('../../database')

const Logout = (req, res) => {
    console.log('logout', req.session.username);
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.end();
        }
        res.clearCookie(process.env.SESSION_NAME);
        res.end();
    });
}

const getLogin = (req, res) => {
    if (req.session.username) {
        res.send({
            loggedIn: true,
            username: req.session.username,
        });
    } else {
        res.send({ loggedIn: false });
    }
}

const postLogin = (req, res) => {
    const { username, password } = req.body
    let query = { username, password }
    conn.collection('users').find(query).toArray((err, files) => {
        if (err) {
            console.log(err);
            return res.status(500).end('error');
        }
        if (!files || files.length == 0) {
            return res.status(400).end(JSON.stringify({
                status: 'UnAuthorize',
                msg: "username and password doesn't match"
            }));
        }
        req.session.username = files[0].username;
        let JSONdata = JSON.stringify({
            status: "Authorized",
            username: req.session.username,
        });

        return res.status(200).end(JSONdata);

    })
}

module.exports = {
    postLogin,
    getLogin,
    Logout
}
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_IP}/${process.env.DB_NAME}`;

module.exports = uri;

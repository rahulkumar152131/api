
const users = [
    {
        "name": "pawan kr",
        "email": "pk@gmail.com",
        "mobile": 154845
    },
    {
        "name": "piyush kr",
        "email": "Piyush@gmail.com",
        "mobile": 157554845
    },
    {
        "name": "pawan kr",
        "email": "pk@gmail.com",
        "mobile": 154845
    },
    {
        "name": "piyush kr",
        "email": "Piyush@gmail.com",
        "mobile": 157554845
    },
    {
        "name": "pawan kr",
        "email": "pk@gmail.com",
        "mobile": 154845
    },
    {
        "name": "piyush kr",
        "email": "Piyush@gmail.com",
        "mobile": 157554845
    }
]

module.exports.get = (req, res) => {
    return res.end(JSON.stringify(todos));
}
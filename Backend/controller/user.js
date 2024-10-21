const User = require('../models/user');

const getUser = async (req,res) => {
    try {
        const data = await User.find()
        res.json({success : true, data})
    } catch (error) {
        res.json({success : false, error: error.message})
    }
}

module.exports = {
    getUser
}
const User = require('../models/user.model')

exports.createUser = async (req, res) => {
    try {
        // req.pramas => data come in URL sach as come anywhere through click
        // req.body => data come in body sach as form filling

        const {name, email} = req.body

        if (!name || !email) {
            throw new Error("Name and Email are required")            
        }
        
        const userExists = await User.findOne({email})

        if (userExists) {
            throw new Error("Email already exists")                         
        }

        const user = await User.create({
            name,
            email
        })

        res.status(200).json({
            success : true,
            message : "User created successfully",
            user
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success : false,
            message : error.message
        })       
    }
}
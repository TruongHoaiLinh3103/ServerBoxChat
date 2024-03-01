const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const {sign} = require("jsonwebtoken")
module.exports = {
    get: async(req,res) => {
        const listUser = await Users.findAll()
        res.json(listUser)
    },
    signUP: async (req, res) => {
        try {
            const {fullname, username, email, password } = req.body;
            const checkUser = await Users.findOne({where: {username: username }})
            if(checkUser) {
                res.json({error: `${username} already exists!`})
            }else{
                bcrypt.hash(password, 10).then((hash) => {
                    Users.create({
                        fullname: fullname,
                        username: username,
                        email: email,
                        password: hash,
                    })
                    res.json("Register successfully!")
                })
            }
        } catch (error) {
            res.send({error: "Error!"})
        }
    },
    signIn: async (req, res) => {
        try {
            const {username, password} = req.body;
            const check = await Users.findOne({where: {username: username}})
            if(!check){
                res.json({error: `${username} does not exist!`})
            }
            else{
                bcrypt.compare(password, check.password).then((same) => {
                    if(!same){
                        res.json({error: "Wrong username and password combination!"})
                    }
                    else{
                        const accessToken = sign({username: check.username, id: check.id}, "importantsecret");
                        res.json(accessToken);
                    }
                })
            }
    
        } catch (error) {
            res.send(error)
        }
    },
    changePass: async (req, res) => {
        const { username, oldPassword, newPassword } = req.body;
        const check = await Users.findOne({ where: { username: username }});
        bcrypt.compare(oldPassword, check.password).then(async (match) => {
          if (!match) res.json({ error: "Wrong Password Entered!" });
          else{
            bcrypt.hash(newPassword, 10).then((hash) => {
                Users.update(
                  { password: hash },
                  { where: { username: username }}
                );
            });
            res.json({success: "Password changed successfully!"})
          }
        });
    }
}
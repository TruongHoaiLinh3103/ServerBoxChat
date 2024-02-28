const { Account } = require("../models");
require("dotenv").config()
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME ,
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET 
});
module.exports = cloudinary;


module.exports = {
    getUser: async (req, res) => {
        try{
            const user = req.params.user;
            const post = await Account.findOne({where: {user: user}});
            res.json(post);
        }
        catch(error){
            res.send(error)
        }
    },
    // post: async (req, res) => {
    //     try {
    //         const user = req.body.user;
    //         const checkUser = await Account.findOne({where: {user: user }})
    //         if(checkUser){
    //             const account = await Account.update({...req.body, img: req.file?.path}, {where: {user: user}});
    //             res.json(account);
    //         }else{
    //             const post = {...req.body, img: req.file?.path}
    //             await Account.create(post)
    //             res.json(post)
    //         }
    //     } catch (error) {
    //         res.json({error: "Error!"})
    //     }
    // },
    post: async (req, res) => {
        const {img} = req.body;
        const checkIMG = await Account.findOne({where: {img: img }})
        if(checkIMG){
            try {
                const user = req.body.user;
                const checkUser = await Account.findOne({where: {user: user }})
                if(checkUser){
                    await Account.update({...req.body, img: img}, {where: {user: user}});
                }else{
                    const post = {...req.body, img: img}
                    await Account.create(post)
                    res.json(post)
                }
            } catch (error) {
                res.json({error: "Error!"})
            }
        }else{
            const image = await cloudinary.uploader.upload(img,
                { 
                    upload_preset: 'cluekvnq',
                    allowed_formats : ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
                }, 
            );
            try {
                const user = req.body.user;
                const checkUser = await Account.findOne({where: {user: user }})
                if(checkUser){
                    await Account.update({...req.body, img: image.url}, {where: {user: user}});
                }else{
                    const post = {...req.body, img: image.url}
                    await Account.create(post)
                    res.json(post)
                }
            } catch (error) {
                res.json({error: "Error!"})
            }
        }
    },
    delete: async (req, res) => {
        try{
            const accountId = req.params.id;
            await Account.destroy({
                where: {
                    id: accountId,
                }
            })
            res.json("DELETED SUCCESSFULLY");
        }
        catch (error) {
            res.send(error)
        }
    }
}
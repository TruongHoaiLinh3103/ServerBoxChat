const { Likes } = require("../models");

module.exports = {
    post: async (req, res) => {
        const { commentId, unchatId } = req.body;
        const UserId = req.user.id;
      
        if(commentId){
          const found = await Likes.findOne({
            where: { CommentId: commentId, UserId: UserId },
          });
          if (!found) {
            await Likes.create({ CommentId: commentId, UserId: UserId });
            res.json({ liked: true });
          } else {
            await Likes.destroy({
              where: { CommentId: commentId, UserId: UserId },
            });
            res.json({ liked: false });
          }
        }else{
          const found = await Likes.findOne({
            where: { UnchatId: unchatId, UserId: UserId },
          });
          if (!found) {
            await Likes.create({ UnchatId: unchatId, UserId: UserId });
            res.json({ liked: true });
          } else {
            await Likes.destroy({
              where: { UnchatId: unchatId, UserId: UserId },
            });
            res.json({ liked: false });
          }
        }
    } 
}
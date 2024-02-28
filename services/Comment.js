const { Op } = require('sequelize');
const { Comment, Likes, Unchat } = require("../models");

const Comments = {
    findAll: ({page, limit, orderBy, sortBy, keyword}) => new Promise(async (resolve, reject) => {
        try {
            const query = {}

            if (keyword) {
                query.productId = {[Op.eq]: keyword}
            }

            const queries = {
                offset: (page - 1) * limit,
                limit
            }       

            if (orderBy) {
                queries.order = [[orderBy, sortBy]]
            }
      
            const data = await Comment.findAndCountAll({
                where: query,
                ...queries,
                include: [Likes, Unchat],
                distinct: true
            })

            const res = {
                totalPages: Math.ceil(data?.count / limit),
                totalItems: data?.count,
                data: data?.rows,
            }

            resolve(res)

        } catch (error) {
            reject(error)
        }
    })
}
module.exports = Comments;
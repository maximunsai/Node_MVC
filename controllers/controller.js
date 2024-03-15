const article = require('../models/article');

module.exports =  {
    createArticle(req, res,next){
        article.get()
        .then(data=>{res.status(200).json({success: true, articles: data})})
        .catch(err=>{res.status(500).json({err})});
    }
};
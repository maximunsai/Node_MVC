const articleController = require('../controllers/controller');

module.exports =(app)=>{
    app.get('/', articleController.createArticle)
};
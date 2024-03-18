const {createUsersTable} = require('../models/article');

// module.exports =  {
//     createArticle(req, res,next){
//         article.get()
//         .then(data=>{res.status(200).json({success: true, articles: data})})
//         .catch(err=>{res.status(500).json({err})});
//     }
// };

const userTableController = async (req, res)=>{
    try{
        createUsersTable();
        res.send('Table creation successful');
    }catch(error){
        console.error('Error in creating table', error);
        res.status(500).json({error: "Error in creating table"})
    }
}
module.exports = {userTableController};
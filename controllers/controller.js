const {createUsersTable, getAllUsers, createUser} = require('../models/article');



const userTableController = async (req, res)=>{
    try{
        createUsersTable();
        res.send('Table creation successful');
    }catch(error){
        console.error('Error in creating table', error);
        res.status(500).json({error: "Error in creating table"})
    }
}

const getUsers = async (req, res) => {
    try {
      const users = await getAllUsers();
      res.status(200).json({ users });
    } catch (error) {
      console.error('Unable to fetch users:', error);
      res.status(500).json({ error: 'Unable to fetch users' });
    }
  };


  const createUserController = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    try {
        const result = await createUser(username, email, password);
        if (result.success) {
            return res.status(201).json({ message: 'User created successfully' });
        } else {
            return res.status(500).json({ error: result.error });
        }
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = {userTableController, createUserController, getUsers};
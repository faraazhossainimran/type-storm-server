const userService = require("../../services/v1/userService");

const createUser = async (req, res) => {
    const userData = req.body;
    const result = await userService.createUser(userData);
    if (result.success) {
        return res.status(201).send({ message: result.message });
    } else {
        return res.status(500).send({ message: result.message });
    }
};


const highScores = async (req, res) => {
    const result = await userService.highScores();
    if(result.success){
        return res.status(200).send(result.data);
    } else{
        return res.status(500).send({message: result.message});
    }
}
module.exports = {
    createUser, 
    highScores
};

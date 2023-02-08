const express = require("express")
const router = express.Router()
const Notes = require("../models/Notes")

router.get ('/', async (req,res)=>{
    try{
        const notes =new Notes(req.body)
        await notes.save();
        console.log(req.body)
        res.status(200).json(req.body)
    } catch (error){
        console.log(error)
    }
})
module.exports= router
// module.exports =(req, res) => {
//     obj={
//         name: 'Google',
//         age:19
//     }
//     // res.send('Handling the /api/auth endpoint');
//     res.json(obj)
// };
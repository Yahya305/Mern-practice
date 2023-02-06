const express = require("express")
const router = express.Router()

router.get ('/',(req,res)=>{
    obj={
        name: 'Google',
        age:19
    }
    res.json(obj)
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
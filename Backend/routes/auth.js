const express = require("express");
const User = require("../models/User")
const router = express.Router();

router.post("/", async (req,res)=>{
    try {
        // const users = new User(req.body);
        const {
            firstName,
            lastName,
            email,
            password
        }= req.body;
        const users = new User({
            firstName,
            lastName,
            email,
            password
        });
        console.log(User)
        await users.save();
        console.log(req.body)
        res.status(200).json(req.body)
        
    } catch (error) {
        console.log(error)
        res.status(404).json({message:error.message})   
    }
})
module.exports= router

// const express = require("express");
// const User = require("../models/User");
// const router = express.Router();

// router.post("/", async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;
//     const user = new User({
//       firstName,
//       lastName,
//       email,
//       password,
//     });
//     // await user.save();
//     res.status(200).json({ message: "User data saved successfully." });
//   } catch (error) {
//     console.log(error);
//     res.status(404).json({ message: error.message });
//   }
// });

// module.exports = router;




// try {
//     const {
//         firstName,
//         lastName,
//         email,
//         password
//     }= req.body;
//     const users = new User({
//         firstName,
//         lastName,
//         email,
//         password
//     });
//     console.log(User)
//     await users.save();
//     console.log(req.body)
//     res.status(200).json(req.body)
    
// } catch (error) {
//     console.log(error)
//     res.status(404).json({message:error.message})
    
// }
const express = require("express");
const router = express.Router();

router.route("/").get((req,res)=>{    
    res.render("adminHome",{
        message:"update"
    });    
    // res.status(200).json({message:"hello"});
})

// Testing View
router.route("/test").get((req,res)=>{    
    res.render("test",{
        message:"update"
    });        
})

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    
 //console.log(res);  
    
  res.json([{
  	name: "Hari Om Bhatia",
  	message: "This is test message"
  }, {
  	name:"Jeams Faukner",
  	message:"This is my note. I will reach at office on 11"
  },
  {
  	name: "Boheman Nomad",
  	message:"I will be there for you! when you are in stuck."
  }]);
  
   
});

module.exports = router;

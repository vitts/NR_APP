var express = require('express');
var router = express.Router();

var mysql = require('mysql');

/* GET users listing. */
router.post('/', function(req, res){
 if(!req.body.name)
 {
     res.status(400).send({error:true,message:'post data not submitted'});
 }
 else
 {
     if(addtoDb(req) != false)
     {
         res.send({error:false,message:'Enquiry has been submitted successfully!'});
     }
     else
     {
         res.status(401).send({error:true,message:'insertion error'});
     }
     
 }
 
 
 
});

module.exports = router;


function addtoDb(req)
{
    // database connection
    var conn = mysql.createConnection({
       host:'localhost',
       user:'root',
       password:'',
       database:'guestbook'
    });
    
    // coonect to db
    conn.connect();
    
    var returnflag = false;
    var name = "'"+req.body.name+"'";
    var email = "'"+req.body.email+"'";
    var mobnum = "'"+req.body.mobnum+"'";
    var comment  = "'"+req.body.comment+"'";
    
    var sql = 'insert into enquiries (name,email,mobile,comment) values('+name+','+email+','+mobnum+','+comment+')';
    
    console.log(sql);
    
    
    var res = conn.query(sql);
    
    if(res.error)
    {
       
    }
    else
    {
       this.returnflag = true;
    }
    
   return this.returnflag;
}
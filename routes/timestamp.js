const express=require('express');
const validator = require('validator');
const moment=require('moment');
const router = express.Router();

router.get('/:date_string?',(req,res,next)=>{
    if(req.params.date_string==undefined){
        res.json({timestamp:new Date()});
    }else{
        if(validator.isInt(req.params.date_string)){
            res.json({unix:parseInt(req.params.date_string),utc:moment.unix(req.params.date_string).format("ddd, D MMM YYYY HH:mm:ss z")});
        }else if(validator.isISO8601(req.params.date_string)){
            res.json({unix:moment(req.params.date_string).unix(),utc:moment(req.params.date_string).format("ddd, D MMM YYYY HH:mm:ss z")});
        }else{
            res.json({error:"Invalid Format"});
        }
    }
});

module.exports=router;
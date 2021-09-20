var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/',function(req,res){
  res.redirect('/public');
})

router.get('/download',function(req,res){
  // res.sendStatus(200);
  res.download(path.join(__dirname,'../',req.query.query))
})

router.get('/:folder', function(req, res, next) {
  const files = [];
  const pp = path.join(path.dirname(__dirname),req.params.folder,'/');
  const readContents = (p)=>{
    fs.readdirSync(p).forEach(file =>{
      if(fs.statSync(path.join(p,file)).isDirectory()){
        readContents(path.join(p,file));
      }else{
        let regex = /(.jpg|.jpeg|.jfif|.png)/;
        
        if(regex.test(path.extname(file))){
          const temp = path.join(p,file).split(pp); 
          console.log(temp)
          files.push(temp[1]);
        }
      }
    });
  }
  readContents(pp);
    console.log(files);
    res.render('index.jade',{files,folder: req.params.folder});

});



module.exports = router;



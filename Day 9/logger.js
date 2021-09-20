const express = require('express');
const app = express();
const router = express.Router();
var cookieParser = require('cookie-parser')

const authentication = (req,res,next) =>{
   res.send('Hello India!!');
   next();
}

app.use(express.urlencoded({extended: true}));
// app.use('/public',express.static('public'))
// app.use('/trial',express.static('trial'))

// app.use(authentication);

// app.get('/user/:userId.:name',(req,res)=>{
//     res.send(req.params);
// })

// app.get('/',(req,res)=>{
//     let q = "";
//     for(let prop in req.query){
//         q = q + prop +"="+req.query[prop] + "&";
//     }
//     console.log(q)
//     res.redirect(`/home?${q}`);
// })

// app.route('/book').get((req,res)=>{
//     res.send('Get a random book');
// }).post((req,res)=>{
//     res.send('Add a book');
// }).put((req,res)=>{
//     res.send('updata a book');
// })

// router.get('/',(req,res)=>{
//     console.log('Birds home page.')
//     res.send('Birds home page.')
// })

// router.get('/about',(req,res)=>{
//     console.log('Birds About page.')
//     res.send('Birds About page.')

// })

// app.use('/birds',router);

// app.get('/home',(req,res)=>{
//     res.json('hello world');
// })

router.use((req,res,next)=>{
    if(req.query.id === '1'){
        return next('router');
    } else{
        next();
    }
})

router.get('/',(req,res)=>{
    res.send(req.query);
})
router.post('/',(req,res)=>{
    res.send(req.query);
})


app.use('/user/',router);

app.post('/user',(req,res)=>{
    res.send('You have been jailed out.')
})


app.listen(5000,(err)=>{
    if(err) throw err;
    console.log('server started.')
})
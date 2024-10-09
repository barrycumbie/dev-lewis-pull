require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const { ObjectId } = require('mongodb')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.URI;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static('./public/'))

console.log(uri);

console.log('Im on a node server');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// function whateverNameOfIt (params) {}
// ()=>{}

// app.get('/', function (req, res) {
//   // res.send('Hello Node from Ex on local dev box')
//   res.render('not-index');
// })

app.get('/ejs', (req,res)=>{

  res.render('index', {
    myServerVariable : "something from server"
  });

  //can you get content from client...to console? 
})

app.get('/', async (req,res)=>{

  console.log('in /');
  await client.connect();
  
  console.log('connected?');
  // Send a ping to confirm a successful connection
  
  let result = await client.db("jacob-db").collection("whatever-collection").find({}).toArray(); 
  console.log(result); 

  res.render('not-index', {
    pData : result
  });

})

app.post('/insert', async (req,res)=> {

  console.log('in /insert');
  
  console.log('request', req.body);

  //connect to db,
  await client.connect();
  //point to the collection 
  await client.db("jacob-db").collection("whatever-collection").insertOne({ lname: req.body.lname, email: req.body.email});
  // await client.db("jacob-db").collection("whatever-collection").insertOne({ key: 'hardcoded new key '});  
  //insert into it
  res.redirect('/');

}); 

app.post('/update/:id', async (req,res)=>{

  console.log('in /update'); 
  // console.log("req.parms.id: ", req.params.id);
  // console.log("req.body ", req.body);

  client.connect; 
  const collection = client.db("jacob-db").collection("whatever-collection");
  let result = await collection.findOneAndUpdate( 
  {"_id": new ObjectId(req.params.id)}, { $set: {"fname": req.body.fname } }
)
.then(result => {
  console.log("result", result); 
  res.redirect('/');
})
}); 

app.post('/delete/:id', async (req,res)=>{

  console.log("req.parms.id: ", req.params.id)

  client.connect; 
  const collection = client.db("jacob-db").collection("whatever-collection");
  let result = await collection.findOneAndDelete( 
  {"_id": new ObjectId(req.params.id)})

.then(result => {
  console.log(result); 
  res.redirect('/');
})

  //insert into it

})

// app.listen(5000);
app.listen(PORT, () => {
  console.log(`Server is running & listening on port ${PORT}`);
});

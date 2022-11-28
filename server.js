require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


const productRoutes = require('./router/product.router')


const Database_Url='mongodb://localhost:27017/learndata'
const PORT =process.env.PORT || 4000;

mongoose.connect(Database_Url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Contect to databse"))
.catch((err)=>console.log(err.message));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
	withCredentials: true,
	origin: ['*','http://localhost:4200']
  }));
  
app.use('/api/v1/product',productRoutes)
app.use(cors({origin:'*',credentials:true}));


app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
  });


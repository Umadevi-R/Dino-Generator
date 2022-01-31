if(process.env.NODE_ENV !=='production')
{
    require('dotenv').config()
}
const { response } = require('express');
const express=require('express');
const fetch=require('node-fetch');
const app=express();
const port = 80;

app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})

app.get('/dinoname',async (req,res)=>{
    const fetchApi=await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.API_KEY,
            "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
        }
    });
    const dinoNameResponse= await fetchApi.json();
    console.log(dinoNameResponse);
    res.json(dinoNameResponse);
});

app.get('/dinoimage',async (req,res)=>{
    const fetchApi=await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.API_KEY,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    });
    const dinoImgResponse= await fetchApi.json();
    console.log(dinoImgResponse);
    res.json(dinoImgResponse);
});

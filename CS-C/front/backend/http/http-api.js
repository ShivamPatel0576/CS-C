const http=require('http');
const axios= require('axios');
const port=3000;
const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{"content-type": "text/html"});
    // const response=await fetch("https://dummyjson.com/products");
    // const jdata=await response.json();

    // const jdata=await response.text();
    // const odata=JSON.parse()

    const response=await axios.get("https://api.github.com/users");
    const jdata= response.data;
    let frondeddata=`<html><head></head><body>`;
     jdata.forEach((i)=>{
        frondeddata+=`<div><img src="${i.avatar_url}"></div>`

     });
     frondeddata+= `</body></html>`;

    res.end(frondeddata);
}
);

server.listen(port,()=>{
    console.log(`server is running on port on ${port}`)
});
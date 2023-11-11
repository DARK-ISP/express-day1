import express from "express";

const app = express();

app.use(express.json());



//customer list


const customer = [
    {
        id: 1,
        name: "dark isp",
        address: "github"
    },
    {
        id: 2,
        name: "code",
        address: "git"
    }
];


//view customer details

app.get("/details",(req,res)=>{
     return res.status(200).send(customer);
})

app.get("/",(req,res)=>{
   
   const name = [];
    for(const customers of customer){
        name.push(`<br> <br>${customers.name}`)
    }
    return res.send(`name list of all customer : <br></br> ${name}`);
})









const port = 8080;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
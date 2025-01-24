const tasks = [
    {
        id : 1,
        task : "sona nhi hai"
    },
    {
        id : 2,
        task : "jagna hai"
    },
    {
        id : 3,
        task : "parhna hai"
    }
]

import express from "express";
const app = express();
const PORT = 4000;

app.get('/',(req , res)=> {
    // console.log(req)
    res.status(200).send(tasks)
});

app.post('/',(req , res)=> {
    // console.log(req)
    res.send("POST REQUEST")
});

app.put('/',(req , res)=> {
    // console.log(req)
    res.send("PUT REQUEST")
});


app.delete('/',(req , res)=> {
    // console.log(req)
    res.send("DeLETE REQUEST")
});

app.listen(PORT , () => console.log("Server is runing on port"+ PORT));
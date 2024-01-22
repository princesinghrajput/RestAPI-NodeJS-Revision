const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("Hii I am Live")

})

const PORT = process.env.PORT || 5000;

const start =async()=>{
    try {
        app.listen(PORT, ()=>{
            console.log(`${PORT} Yes, I am Connected`);

        })
    } catch (error) {
        console.log(error)
    }

}
start();
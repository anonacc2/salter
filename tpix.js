const app = require("express")();

app.get("/dog.png", (req, res)=>{
  console.log("Email opened " + new Date())
  res.sendFile(__dirname + "/trackr.png")
})

app.listen(8080)

const qr = require("qrcode")

const data = {
  "name":"nsabiamana",
  "email":"emmy@gmail.com",
  "gender":"male",
  "id":372
}

let stJson = JSON.stringify(data)

//making qr code string 
qr.toString(stJson,{type:"terminal"},function(error,code){
  if(error) return console.log(error)
  console.log(code)
})

// export QR code as a file

qr.toFile("code.png" ,stJson,function(error,code){
  if(error) return console.log(error)
})
const tesseract = require("tesseract.js")
const fs = require("fs")

//make public folder accessible
// app.use(express.static("public"))

//upload image
tesseract.recognize("eng_bw.png", "eng", {
  logger: m => console.log(m)
}).then(result => {
  console.log(result.data.text)
}).catch(err => {
  console.log(err.message)
})


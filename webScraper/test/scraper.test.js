const request  = require("supertest")
const app = require("../scrape")


beforeAll(() => {
  server = app.listen("5080");
})

afterAll(() => {
  server.close()
})
describe("GET / ", ()=>{
  it("responds with the scraped title", async()=>{
    const res = await request(app).get("/data") 
    expect(res.statusCode).toEqual(200)
    expect(res.body.type).toEqual("Notable companies in Silicon Valley.")
    
  })
})
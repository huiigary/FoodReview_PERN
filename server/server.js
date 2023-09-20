// import express
import express from 'express'
import 'dotenv/config'
// give instance of express app
const app = express()
// make app listen at port
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log('Server is running on port:', port)
})

app.get('/getRestaurants', (req, res) => {
  res.status(200).json({
    status: 'successs',
    restaurant: 'test restaurant',
  })
})

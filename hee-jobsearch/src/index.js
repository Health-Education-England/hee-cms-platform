import express from 'express'
import bodyParser  from 'body-parser'
import cors from 'cors'
import JobSearch from './JobSearch.js'
import dotenv from 'dotenv'

dotenv.config()


// defining the Express app
const app = express();

// location of service
const jobs_url = process.env.JOBS_URL || "http://localhost:33000"
const port = process.env.PORT || 3000

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

app.use("*", (req, res, next) => {
  req.jobs_url = jobs_url

  next()
})

// defining an endpoint to return all ads
app.get('/jobs', JobSearch);

// starting the server
app.listen(port, () => {
  console.log(`This service is listening on port ${port}`);
  console.log(`Reading NHS Jobs from ${jobs_url}`);
});
const express = require('express')
const cors = require('cors')
const Twitter = require('twitter')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})

const defaults = {
  tweet_mode: 'extended',
  exclude_replies: false,
  include_rts: true,
  count: 20,
}

const app = express()

app.use(cors())

app.route('/:handle').get(function (req, res) {
  const params = {
    ...defaults,
    max_id: req.query.max_id,
    screen_name: req.params.handle,
  }
  client.get(
    'statuses/user_timeline',
    params,
    function (error, tweets, response) {
      if (!error) {
        res.json(tweets)
      } else {
        console.error(error)
      }
    }
  )
})

app.listen(5000, function (error) {
  console.log(' server running on port 5000')
})

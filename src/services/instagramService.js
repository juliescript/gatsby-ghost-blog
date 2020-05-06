const axios = require('axios')

const BASE_URL = 'https://graph.instagram.com/me'
const ACCESS_TOKEN = 'IGQVJYdXpMVjZAMUV9LS29EdWFmbnM4VGExUTVpV1B0Ujdsb3hqZADZAYVUtOeXBmOFhabmtWYzQ1cVZAJS0RCdDJYNWt5UmdqUzNGMEozRE41QnRhQzl6eHNRTWp2SVRSak83ZA2drRFh3'

export const getInstagramFeed = (() => {
    return axios.get(`${BASE_URL}/media?fields=media_url,caption,permalink&access_token=${ACCESS_TOKEN}`)
})

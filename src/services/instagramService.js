const axios = require("axios")

const BASE_URL = "https://graph.instagram.com/me"
const ACCESS_TOKEN = process.env.INSTAGRAM_TOKEN

export const getInstagramFeed = () => {
  return axios.get(
    `${BASE_URL}/media?fields=media_url,caption,permalink&access_token=${ACCESS_TOKEN}`
  )
}

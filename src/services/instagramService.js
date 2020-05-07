const axios = require("axios")

const BASE_URL = "https://graph.instagram.com/me"

export const getInstagramFeed = () => {
  return axios.get(
    `${BASE_URL}/media?fields=media_url,caption,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`
  )
}

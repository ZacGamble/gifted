
// @ts-ignore
export const gifApi = axios.create({
     baseURL: "http://api.giphy.com/v1/gifs/search",
     timeout: 8000
 })
 // @ts-ignore
 export const sandboxApi = axios.create({
     baseURL: "https://bcw-sandbox.herokuapp.com/api",
     timeout: 5000
 })


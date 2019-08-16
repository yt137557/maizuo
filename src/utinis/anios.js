import axios from "axios"

const req = axios.create({
  baseURL: "https://m.maizuo.com/gateway",
  headers: {
    "X-Client-Info":
      '{"a":"3000","ch":"1002","v":"5.0.4","e":"1563798652721554505868"}',
    "X-Host": "mall.film-ticket.film.list"
  }
})

//响应拦截
req.interceptors.response.use(req => {
  return req.data.data
})
export default req

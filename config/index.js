const isDev = process.env.NODE_ENV === 'development'



export default {
  baseURL: isDev ? 'http://localhost:5000/api' : 'http://118.24.148.253:5000/api'
}
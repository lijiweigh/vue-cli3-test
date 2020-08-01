const path = require("path")
const dotEnv = require("dotenv")
const dotENVExpand = require("dotenv-expand")

let env = dotEnv.config()
console.log(env)
// console.log(dotENVExpand(env))
console.log(process.env.VUE_APP_MY_ENV)
env = dotEnv.config({path: path.resolve(__dirname, ".env.development")})
console.log(env)
// console.log(dotENVExpand(env))

console.log(process.env.VUE_APP_MY_ENV)
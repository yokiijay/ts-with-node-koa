import Koa from 'koa'
import Router from '@koa/router'

const app = new Koa()
const router = new Router()

app.use(async (ctx, next)=>{
  console.log( ctx.ip )
  ctx.body = `<h1>Hello World</h1>`
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log( `Server is running at ${PORT}` ))

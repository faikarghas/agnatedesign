// const express       = require('express');
// const next          = require('next');
// const compression   = require('compression')
// const cookieParser = require('cookie-parser');

// require('dotenv').config()
// const port      = process.env.PORT || 3015;
// const dev       = process.env.NODE_ENV !== 'production';
// const app       = next({dev});
// const handle    = app.getRequestHandler();


// const sitemapOptions = {
//     root: __dirname + '/static/sitemap/',
//     headers: {
//         'Content-Type': 'text/xml;charset=UTF-8'
//     }
// };

// app.prepare()
// .then(()=>{
//     const server = express()
//     server.use(compression());
//     server.use(cookieParser());

//     server.get('*', (req, res) => {
//         return handle(req, res)
//     })

//     server.listen(port, err =>{
//         if (err) throw err
//         console.log(`> Ready on ${port}`);
//     })
// })
// .catch(ex=>{
//     console.error(ex.stack);
//     process.exit(1)
// })


// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
        await handle(req, res, parsedUrl)
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
      }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
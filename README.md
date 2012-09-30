# route-filter

A filter function that acts as a router

## Example

``` js
var HttpStream = require("http-stream")
    , chain = require("chain-stream")
    , sendJson = require("send-data").json
    , Router = require("route-filter")

    , server = chain(HttpStream().listen(8080))
    , route = Router()

server
    .filter(route("/"))
    .forEach(function (dup) {
        dup.end("hello world")
    })

server
    .filter(route("/json"))
    .forEach(function (dup) {
        sendJson(dup, dup, {
            hello: "world"
        })
    })

server
    .filter(route.notFound)
    .forEach(function (dup) {
        dup.end("404")
    })
```

## Installation

`npm install route-filter`

## Contributors

 - Raynos

## MIT Licenced

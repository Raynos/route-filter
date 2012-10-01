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
    // only accept GET methods to /get
    .filter(route("/get", "GET"))
    .forEach(function (dup) {
        dup.end("get")
    })

server
    .filter(route("/post", "POST"))
    .forEach(function (dup) {
        dup.end("post")
    })

server
    .filter(route.notFound)
    .forEach(function (dup) {
        dup.end("404")
    })

server
    .filter(route.invalidMethod)
    .forEach(function (dup) {
        // called when you make a DELETE to /get
        dup.end("invalid method")
    })

```

## Installation

`npm install route-filter`

## Contributors

 - Raynos

## MIT Licenced

var HttpStream = require("http-stream")
    , chain = require("chain-stream")
    , sendJson = require("send-data").json

    , Router = require("..")

    , server = chain(HttpStream().listen(8080))
    , route = Router()

server.setMaxListeners(30)

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
    .filter(route("/post", "DELETE"))
    .forEach(function (dup) {
        dup.end("delete")
    })

server
    .filter(route.notFound)
    .forEach(function (dup) {
        dup.end("404")
    })

server
    .filter(route.invalidMethod)
    .forEach(function (dup) {
        dup.end("invalid method")
    })

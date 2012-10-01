var mapleTree = require("mapleTree")
    , toArray = require("to-array")
    , allMethods = require("methods").map(toUpperCase)
    , RouteTree = mapleTree.RouteTree
    , pattern = mapleTree.pattern

module.exports = Router

function Router() {
    var router = new RouteTree()
        , routeMap = {}

    route.notFound = notFound
    route.invalidMethod = invalidMethod

    return route

    function route(uri) {
        var match = pattern(uri)
            , methods = toArray(arguments, 1)

        if (methods.length === 0) {
            methods = allMethods
        }

        if (!routeMap[uri]) {
            routeMap[uri] = methods
            router.define(uri, uri)
        } else {
            routeMap[uri] = routeMap[uri].concat(methods)
        }

        return filter

        function filter(dup) {
            console.log("check", uri, methods)
            return match(dup.url) && methods.indexOf(dup.method) > -1
        }
    }

    function notFound(dup) {
        var match = router.match(dup.url)

        return !match.fn
    }

    function invalidMethod(dup) {
        var match = router.match(dup.url)
            , methods = routeMap[match.fn]

        return methods && methods.indexOf(dup.method) === -1
    }
}

function toUpperCase(str) {
    return str.toUpperCase()
}

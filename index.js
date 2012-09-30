var mapleTree = require("mapleTree")
    , RouteTree = mapleTree.RouteTree
    , pattern = mapleTree.pattern

module.exports = Router

function Router() {
    var router = new RouteTree()

    route.notFound = notFound

    return route

    function route(uri) {
        var match = pattern(uri)

        router.define(uri, true)

        return filter

        function filter(dup) {
            return match(dup.url)
        }
    }

    function notFound() {
        return filter

        function filter(dup) {
            var match = router.match(dup.url)

            return !match.fn
        }
    }
}

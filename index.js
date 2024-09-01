const TransparentProxy = require("transparent-proxy");

const server = new TransparentProxy({
    verbose: true
});

server.listen(8080, "0.0.0.0", () => {
    console.log("Server started");
})
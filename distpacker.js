const packer = require("./packer")
packer.Pack(
    [
        "./lib/render/render.js" ,
        "./lib/insert/insert.js"
    ] , "applecake.js"
)
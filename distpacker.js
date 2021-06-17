const packer = require("./packer")
packer.Pack(
    [
        "./lib/Render/render.js" ,
        "./lib/Insert/insert.js" ,
        "./lib/ID/idmanager.js"
    ] , "applecake" 
)
const packer = require("./packer")
packer.Pack(
    [
        "./lib/Render/render.js" ,
        "./lib/Insert/insert.js" ,
        "./lib/ID/Manager/idmanager.js",
        "./lib/ID/Select/idselector.js"
    ] , "applecake" 
)
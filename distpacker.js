const packer = require("./packer")
packer.Pack(
    [
        "./lib/Render/render.ts" ,
        "./lib/Insert/insert.ts" ,
        "./lib/Idmanager/idmanager.ts",
        "./lib/Select/idselector.ts",
        "./lib/Select/classselector.ts"
    ] , "dist/typescript", "applecake.ts" 
)
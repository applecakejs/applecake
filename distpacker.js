const packer = require("./packer")
packer.Pack(
    [
        "./lib/Render/render.ts" ,
        "./lib/Insert/insert.ts" ,
        "./lib/ID/Manager/idmanager.ts",
        "./lib/ID/Select/idselector.ts"
    ] , "dist/typescript", "applecake.ts" 
)
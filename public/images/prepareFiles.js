const fs = require("fs");
const pngFiles = fs.readdirSync("./").filter(x => x.includes("png"));
pngFiles.map(x => {
    fs.rename(x, x.split(".png")[0].replace(/[^A-Z0-9]+/ig, "_").toLowerCase()+'.png', (err) => {
      if (err) throw err;
      console.log('Rename complete!');
    });
})

const jpgFiles = fs.readdirSync("./").filter(x => x.includes("jpg"));
jpgFiles.map(x => {
    fs.rename(x, x.split(".jpg")[0].replace(/[^A-Z0-9]+/ig, "_").toLowerCase()+'.png', (err) => {
      if (err) throw err;
      console.log('Rename complete!');
    });
})
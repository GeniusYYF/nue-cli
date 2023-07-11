const download = require("download-git-repo");

download("direct:", "./nue-cli", { clone: true }, err => {
    console.log(err);
})
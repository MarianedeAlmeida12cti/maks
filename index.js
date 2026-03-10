import express from "express"

const ironman = express();

ironman.listen(3000, () => {
    console.log("Bom dia, moreee!")
})
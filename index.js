import express from "express"

const ironman = express();

const juvenal  = express();

juvenal.get()

ironman.listen(3000, () => {
    console.log("Bom dia, moreee!")
})
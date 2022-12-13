const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookModel = new Schema(
    {
        name: { type: String, required: true },
        author: { type: String, required: true },
        desc: { type: String, required: true },
        image: { type: String, required: true },
    },
    { collection: "books" }
);

module.exports = mongoose.model("bookModel", bookModel);

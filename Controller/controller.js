const bookModel = require("../Model/models")

const home = (req, res) => {
    res.render("index");
};
const directHome = (req, res) => {
    res.redirect("/home");
};
const getBooks = async (req, res) => {
    try {
        const result = await bookModel.find()
        res.render("books", { books: result });
    } catch (error) {
        console.log(error);
    }

};
const getBook = async (req, res) => {
    try {
        const result = await bookModel.findOne({ _id: req.params.id });
        res.render("book_detail", { book: result });
    } catch (error) {
        console.log(error);

    }
};
module.exports = { getBook, home, directHome, getBooks, getBook }
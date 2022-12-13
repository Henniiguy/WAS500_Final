
const bookModel = require("../Model/models")

const DeleteBook = async (req, res) => {
    try {

        const result = await bookModel.findOneAndRemove({ _id: req.params.id });
        res.redirect("/admin");
    } catch (error) {
        res.redirect("/admin");
        console.log("Error: " + error);
    }
};
const editBook = async (req, res) => {
    try {
        await bookModel.updateOne({ _id: req.params.id }, req.body);
        res.redirect("/admin");
    } catch (error) {
        console.log("Error: " + error);
    }
};
const getBooks = async (req, res) => {
    const result = await bookModel.find()
    res.render("admin", { books: result });
};
const createBook = async (req, res) => {
    try {
        const book = new bookModel(req.body);
        const newbook = await book.save();
        res.redirect("/admin");

    } catch (error) {
        res.render("AddBook")
        console.log("Error: " + error);
    }
}
const AddView = (req, res) => {
    res.render("AddBook")
}
const EditView = async (req, res) => {
    try {
        const result = await bookModel.findOne({ _id: req.params.id });
        res.render("EditBook", { book: result });
    } catch (error) {

    }
}
module.exports = { getBooks, DeleteBook, editBook, createBook, AddView, EditView }
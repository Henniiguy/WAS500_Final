const { BookModel } = require("../Model/models");



const DBHandler = {
    getAllBooks: async (callback) => {
        try {
            const res = await BookModel.find();
            callback(res);
        } catch (e) {
            console.log(e);
            callback(null, e);
        }

    },
    getBookByID: async (bookid, callback) => {
        try {
            const res = await BookModel.findById(bookid);
            callback(res);
        } catch (e) {
            console.log(e);
            callback(null, e);
        }

    },
    // this function will add new books
    createNewBook: async (name, author, desc, image, callback) => {
        try {
            const newBook = new BookModel({
                name: name,
                author: author,
                desc: desc,
                image: image,
            });
            await newBook.save();
            callback(true);
        } catch (e) {
            console.log(e);
            callback(null, e);
        }

    },
};

module.exports = { DBHandler };

const express = require('express');
const { editBook, DeleteBook, getBooks, createBook, AddView, EditView } = require("../Controller/adminController")
const router = express.Router();

router.get("/", getBooks);

router.get("/delete/:id", DeleteBook);

router.post("/edit/:id", editBook);

router.post("/add", createBook)

router.get("/addnewbook", AddView)
router.get("/editView/:id", EditView)


module.exports = router;


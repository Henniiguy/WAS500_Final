const express = require('express');
const { home, directHome, getBooks, getBook } = require("../Controller/controller")
const router = express.Router();

router.get("/home", home);

router.get("/", directHome)

router.get("/booksList", getBooks);

router.get("/book/:id", getBook);

module.exports = router;
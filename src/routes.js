const express = require('express')
const multer = require('multer')
const LikeController = require('./constrollers/LikeController')
const PostController = require('./constrollers/PostController')
const uploadConfig = require('./config/upload')

const routes = new express.Router()

const upload = multer(uploadConfig)

routes.use(express.json())
routes.use(express.urlencoded({ extended: true }))

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)

routes.post('/posts/:id/like', LikeController.store)

module.exports = routes

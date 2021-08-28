const express = require("express");
const router = express();
const bodyParser = require("body-parser");
const Post = require("../models/post");
router.use(bodyParser.json());


// ! Affichage de tout les posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.warn(error);
        res.json({message: error.message})
    }
})


// ! Création d'un post
router.post("/", async (req,res) => {
    console.log(req.body);

    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        console.warn(error);
        res.json({message: error.message})
    }
})


// ! Update d'un post
router.put("/:id", async (req,res) => {
    try {
        const postToUpdate = await Post.findById(req.params.id);
        const savedPost = await Post.updateOne(
            {_id: req.params.id},
            {
                $set: {
                    title: req.body.title ?? postToUpdate.title,
                    content: req.body.content ?? postToUpdate.content
                }
            }
        );
        res.send(savedPost);
    } catch (error) {
        console.warn(error);
        res.json({message: error.message})
    }
})


// ! Delete un post
router.delete("/:id", async (req,res) => {
    try {
        const deletePost = await Post.remove({_id: req.params.id});
        res.json(deletePost);
    } catch (error) {
        console.warn(error);
        res.json({message: error.message})
    }
})

module.exports = router;
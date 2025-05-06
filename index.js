import express from 'express';

const app = express();
const port = 3000; 
var postId = 0;
var posts = [];

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", {posts: posts});
});

app.get("/blog/:id", (req, res) => {
    res.render("blog.ejs", {post: posts[req.params.id]}); 
});

app.post("/submit", (req, res) => {
    posts.push({id: postId++, title: req.body.title, content: req.body.content, date: new Date().toLocaleString()});
    res.redirect("/");
});

app.post("/update/:id", (req, res) => {
    // update post
    posts[req.params.id].title = req.body.title;
    posts[req.params.id].content = req.body.content;
    // redirect to the updated page
    res.redirect(`/blog/${req.params.id}`);
});

app.get("/delete/:id", (req, res) => {
    // delete the post
    posts = posts.filter(post => post.id !== Number(req.params.id));
    // redirect to home page
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
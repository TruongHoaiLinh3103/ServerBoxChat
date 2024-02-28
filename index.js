const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require('morgan');
app.use(morgan('combined'));
const bodyParser = require("body-parser"); 
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true , limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: false })); 
const PORT = 4000;
app.use(cors());
const db = require("./models")

const comment = require("./routers/Comment");
app.use("/comment", comment);
const unchat = require("./routers/Unchat");
app.use("/unchat", unchat);
const wishlist = require("./routers/Wishlist");
app.use("/wishlist", wishlist);
const auth = require("./routers/Users")
app.use("/auth", auth);
const likes = require("./routers/Likes");
app.use("/likes", likes);
const blogs = require("./routers/Blogs");
app.use("/blog", blogs);
const account = require("./routers/Account");
app.use("/account", account);
const history = require("./routers/History");
app.use("/history", history);
const notification = require("./routers/Notification");
app.use("/notification", notification);
// const upload = require("./routers/UploadBlog");
// app.use("/upload", upload)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}!`)
  });
});
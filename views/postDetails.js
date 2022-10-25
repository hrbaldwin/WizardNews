const express = require("express");
const morgan = require("morgan");
const postBank = require("../postBank");

const timeAgo = require("node-time-ago");

const postDetailsRouter = express();

postDetailsRouter.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = postBank.find(id);
  if (!post.id) {
    res.status(404);
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Wizard News</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <header><img src="/logo.png"/>Wizard News</header>
        <div class="not-found">
          <p>You done broke the Page! 🧙‍♀️ ... Page Not Found</p>
        </div>
      </body>
      </html>`;
    res.send(html);
  } else {
    res.send(`<!DOCTYPE html>
      <html>
      <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
      <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      
      <div class='news-item'>
      <p>
      <span class="news-position">${post.id}. ▲</span>${post.title}
      <small>(by ${post.name})</small>
      </p>
      <p>
      ${post.content}
      </p> 
      <small class="news-info">
      ${post.upvotes} upvotes | ${post.date}
      </small>
      </div>
      </div>
      </body>
      </html>`);
  }
});
module.exports = postDetailsRouter;

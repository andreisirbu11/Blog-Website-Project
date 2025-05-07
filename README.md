# 📝 Blog Web Application

This is a simple blog web application built using **Node.js**, **Express.js**, **EJS**, and **Bootstrap** as part of a Capstone Project. The app allows users to create, view, edit, and delete blog posts. This version does not use a database, so posts will not persist between sessions.

## 🌐 Live Example

Inspired by: [Paul Graham Articles](http://www.paulgraham.com/articles.html)

## 📌 Features

1. **Post Creation**: Users can create new blog posts using a form.
2. **Post Viewing**: All blog posts are displayed on the home page.
3. **Post Editing/Deleting**: Users can modify or remove existing posts.
4. **Responsive Styling**: A polished, user-friendly interface using Bootstrap that adapts to desktop and mobile screens.

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Bootstrap 5 (for styling)

## 📁 Project Structure

```   
/public                    # Static files folder
  └── /assets              # Assets
        └── *.png          
/views                     # Dynamic files folder
  ├── index.ejs            # Home page with post list
  ├── blog.ejs             # Individual post template
  └── /partials            # Header/footer partials
        ├── header.ejs
        └── footer.ejs                        
index.js                   # Express routes
package.json               # Project metadata and dependencies
```

## 🚀 Getting Started

To run the project locally:

1. Clone the repository:
   ```
   git clone https://github.com/andreisirbu11/Blog-Website-Project-.git
   cd blog-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   node index.js
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 📋 License

This project is open source and available under the [MIT License](LICENSE).
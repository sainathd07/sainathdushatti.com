---
title: "How to setup a gatsby project in 2024"
description: "A simple guide to setup a gatsby project"
date: "Nov 11 2024"
draft: false
---
I’ve heard a lot about Gatsby since I first started making websites, but I'll admit I never tried it because I was comfortable using vanilla HTML, CSS, and JavaScript. Recently, I decided to give Gatsby a try, and it turned out to be amazing! I instantly liked it because of its ability to pull data directly from Markdown files and convert it into blog posts. This feature is essential for me as it allows me to publish my notes as blog posts with minimal extra work.

I’ve decided to build my blog with Gatsby. However, I couldn’t find a clear, beginner-friendly article that explained how to set up a Gatsby project, so I decided to create one.
# Prerequisites
---
Before you begin, make sure you have:
- **Node.js** and **npm** installed on your machine.
# Goals
---
- Understanding what Gatsby is and how it can be useful.
- Creating and deploying a Gatsby site from scratch.

# What is Gatsby?
---
Gatsby is a framework that helps you build fast websites and apps by generating static pages that load quickly. It’s built on React, making it easy to create modern, dynamic user interfaces. 

# What's so great about Gatsby?
---
Gatsby has many plugins that make it easy to pull in content from different places (like WordPress or Markdown files) and help your site load faster.

# Installation
---
Install the Gatsby CLI globally, if you already installed it ignore this step
```
npm install -g gatsby-cli
```

# Steps to set up the Gatsby Starter Blog
---
## 1. Create a new Gatsby site
- Use the Gatsby CLI to create a new project with the **Gatsby Starter Blog** template.
```
gatsby new my-blog https://github.com/gatsbyjs/gatsby-starter-blog
```
- Replace my-blog with preferred project name.
## 2. Navigate to the created project directory
```
cd my-blog
```
## 3. Install dependencies
- Run the following command to install the dependencies:
```
npm install
```
## 4. Start the development server
- Run the following command to start a local development server:
```
gatsby develop
```
- Your site should now be running at `http://localhost:8000`
## 5. Open the project in your editor
- Open the `my-blog` folder in your preferred code editor (e.g., VSCode). From here, you can start customizing the content and design.
## 6. Customize the Blog Template
- **Edit Markdown Files**: You’ll find Markdown files for blog posts in the `content/blog` directory.
- **Update Site Metadata**: Customize metadata like the site title and description in the `gatsby-config.js` file.
- **Change Styles**: Modify styles by editing CSS files or adding new styling with a library like **Tailwind CSS** if desired.
## 7. Build and Deploy
- To build the project for production, run:
```
gatsby build
```
- This command will generate optimized files in the `public` folder. You can now deploy the files on any hosting platform of your choice like **Netlify, Vercel** or **GitHub Pages**

# Conclusion
This article should have provided you with a clear guide to setting up a Gatsby project. There’s still a lot more to explore and learn with Gatsby, but I hope you now feel confident enough to dive in and experiment on your own!
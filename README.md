<p align="center">
  <a href="https://bobbydreamer.com">
    <img alt="LekoArts" src="./static/android-chrome-192x192.png" />
  </a>
</p>
<h1 align="center">
  bobbydreamer.com
</h1>

Simple personal website consisting of bio, notes, how-tos, some ideas and will act as a sandbox for some of my testing. 

This site is built using Gatsby Theme [`@lekoarts/gatsby-theme-minimal-blog`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog).

Click to check the site [bobbydreamer.com](https://bobbydreamer.com)

## ✨Installation
1. Install gatsby CLI
2. Install as a starter theme : `gatsby new bdv32 LekoArts/gatsby-starter-minimal-blog`
3. Clone this repo to another new folder 'cloned'
4. Copy & Replace below files & folders from cloned repo folder to bdv32
    * Folders : content, src, static
    * Files   : README.md, gatsby-config.js, package.json
5. Run `npm install` (once, only once) and never again. 


More customization instruction are in [Original-README.md](./Original-README.md) from gatsby theme author

## ✨ Testing

1. Test the site
    ```
    gatsby clean                # Deletes .cache, public folders
    
    gatsby develop              # Few outputs 
    gatsby develop --verbose    # For verbose outputs    
    ```

1. Open browser of your choice as the site is running at 
    ```
    http://localhost:8000/
    ```

## 🚀 Deployment

I am using google firebase hosting for deployment and follow instructions in this [link](https://www.gatsbyjs.org/docs/deploying-to-firebase/). 

Below are some regular commands i use during deployments
```
gatsby clean
gatsby build
gatsby serve

firebase serve --only hosting
firebase deploy -m "November 2020 : Update 1 : Git Theory 7 Pages"
```
 
## 🌟 Thanks for visiting my site and Github Repo

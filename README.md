# Bootcamping with Gatsby: 
```
| Gatsby | React | Blog | contentful | Gatsby-plugin-file | Helmet | image-plugin-sharp | SPA | Netlify | Hosting | CSS | SCSS | Filesystem | Node.js | createNode | slug |
```
## Follow the Instruction Below to learn & create your own Gatsby Blog Site:

* 1: Go to terminal & type:
* >```npm install -g gatsby-cli```
* >```gatsby new bootcamp https://github.com/gatsbyjs/gatsby-starter-hello-world```
* >```cd bootcamp```
>We have Installed Gatsby, Now We will run in dev mode & start coding
---
* 2: Go to terminal & type:
* >```npm run develop```
* 3: Go To index.js @ ```/src/pages/index.js``` & follow inst [```1-2```]
* 4: Create blog.js @ ```/src/pages/blog.js``` & follow inst [```3-5```]
* 5: Create about @ ```/src/pages/about.js``` & follow inst [```6-8```]
* 6: Create contacts @ ```/src/pages/contacts.js``` & follow inst [```9-11```]
* 7: Go To index.js @ ```/src/pages/index.js``` & create contacts PageLinks, follow inst [```12-13```]
* 8: Go To contacts.js @ ```/src/pages/contacts.js``` & create Home PageLinks, follow inst [```14-15```]
* 9: Go To about.js @ ```/src/pagabout.js``` & create Home & Contacts PageLinks, follow inst [```16-17```]
* 10: Create components directory @ ```/src/components```
* 11: Create footer @ ```/src/components/footer.js``` & follow inst [```18-20```]
* 12: Go To index.js @ ```/src/pages/index.js``` & import Footer ComponentLinks, follow inst [```21.1-21.2```]
* 13: Similarly Go To all other Pages add Footer ComponentLinks
* 14: Create header @ ```/src/components/header.js``` & follow inst [```22-24```]
* 15: Go To index.js @ ```/src/pages/index.js``` & import header ComponentLinks, follow inst [```25.1-25.2```]
* 16: Similarly Go To all other Pages add header ComponentLinks
* 17: Create layout @ ```/src/components/layout.js``` & follow inst [```26-28```]
* 18: Go To index.js @ ```/src/pages/index.js``` & Delete header & footer components & then import layout ComponentLinks, follow inst [```29.1-29.2```]
* 19: Similarly Go To all other Pages add layout ComponentLinks
* 20: Create styles directory @ ```/src/styles``` & In terminal install ```gatsby-plugin--sass```:
* >```Ctrl+c```
* >```npm install --save node-sass gatsby-plugin-sass```
* 21: Create gatsby-config.js directory @ ```/gatsby-config.js``` & follow inst [```30```]
* 22: Create index.scss directory @ ```/src/index.scss```
* 23: Restart the server, using the terminal cmd:
* >```npm run develop```
* 24: Now go to link ```http://links.mead.io/gatsbystyles``` & copy the raw code & paste in ```/src/styles/index.scss```
* 25: Create header.module.scss @ ```/src/components/header.module.scss``` & follow inst [```31```]
* 26: Go To header.js @ ```/src/pages/header.js``` & ```import header.scss```
* 27: Go to ```/gatsby-config.js``` & follow inst [```32```]
* 28: Go to link ```localhost:8000/___graphql``` & type query:
* >```query { site { siteMetadata { title}}}```
* 29: Go To header.js @ ```/src/components/header.js``` & follow inst [```33```]
* 30: Go To footer.js @ ```/src/components/footer.js``` & follow inst [```34```]
* 31: Now for installing the ```new GraphQl playground IDE```, go to terminal:
* >```Ctrl+c```
* 32: Create .env.dev @ ```/.env.dev``` & follow inst [```35```]
* >```npm i --save-dev env-cmd```
* 33: Now go to ```/package.json``` & change under ```scripts/develop/"env-cmd .env.dev gatsby develop"```, type: ```GATSBY_GRAPHQL_IDE=playground```
* >```npm run develop```
* 34: Now Create Posts directory @ ```/src/posts```
* 35: Create gatsby.md @ ```/src/posts/gatsby.md```
* 36: Create react.md @ ```/src/posts/react.md```
* 37: Now Install gatsby ```plugin for filesystem```, go to terminal:
* >```Ctrl+c```
* >```npm i gatsby-source-filesystem@2.0.28```
* 38: Go to ```/gatsby-config.js``` & follow inst [```36```]```
* >```npm run develop```
* 39: Go to link ```localhost:8000/___graphql``` & type query:
* >```query { allFile { edges { node { name, dir, extension }}}}```
* 40: Now Install gatsby ```plugin for prarsing filesystem```, go &
* >```Ctrl+c```
* >```npm i gatsby-transformer-remark@2.3.8```
* 41: Go to ```/gatsby-config.js``` & follow inst [```37```]
* >```npm run develop```
* 42: o to link ```localhost:8000/___graphql``` & type query:
* >```query { allMarkdownRemark { edges { node { frontmatter { title date }, html, excerpt, wordCount { paragraphs sentences words } }}}}```
* 43: Go To blog.js @ ```/src/pages/blog.js``` & follow inst [```38```]
* 44: Create gatsby-node.js @ ```/gatsby-node.js``` & follow inst [```39```]
* 45: Now Create templates directory @ ```/src/templates```
* 46: Create blog.js @ ```/src/templates/blog.js``` & follow inst [4```0```]
* 47: Go To gatsby-node.js @ ```/gatsby-node.js``` & follow inst [```41```]
* 48: Go To blog.js @ ```/src/pages/blog.js``` & follow inst [```42```]
* 49: Now Install gatsby ```plugin for fetching, prarsing, linking images```, go &
* >```Ctrl+c```
* >```npm i gatsby-plugin-sharp@2.0.32 gatsby-remark-images@3.0.10 gatsby-remark-relative-images@0.2.2```
* 50: Go to ```/gatsby-config.js``` & follow inst [```43```]```
* >```npm run develop```
* 51: create a ```folder``` for ```each post``` in ```post directory``` for structuring
* 52: Now create footer.module.scss @ ```/src/components/footer.module.scss``` & follow inst [```44```]
* 53: Now import footer.module.scss @ ```/src/components/footer.js```, inst [```44.1```]
* 54: Now create blog.module.scss @ ```/src/pages/blog.module.scss``` & follow inst [```45```]
* 55: Now import blog.module.scss @ ```/src/pages/blog.js```, inst [```45.1```]
* 56: Now for ```cms```, we will use ```contentful```, so go to link ```www.contentful.com``` & create an account.
* 57: Now Install ```gatsby plugin for contentful```, go &
* >```Ctrl+c```
* >```npm i gatsby-source-contentful```
* 58: Go to ```/gatsby-config.js``` & follow inst [```46```]
* >```npm run develop```
* 59: Go to link ```localhost:8000/___graphql``` & type query:
* >```query { allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) { edges { node { title slug publishedDate(formatString: "DD-MMM-YYYY")}}}}```
* 60: Go To blog.js @ ```/src/pages/blog.js``` & follow inst [```47```]
* 61: Go To gatsby-node.js @ ```/gatsby-node.js``` & follow inst [```48```]
* 62: Go To blog.js @ ```/src/templates/blog.js``` & follow inst [```49```]
* 63: Install ```plugin``` to ```parse body``` from ```contentful```
* >```ctrl+c```
* >```npm i @contentful/rich-text-react-renderer```
* 64: Go To blog.js @ ```/src/templates/blog.js``` & follow inst [```50```]
* 65: Create 404.js @ ```/src/pages/404.js``` & follow inst [```51```]
* 66: Now install ```Helmet plugin ```for configuring ```head of page```
* >```ctrl+c```
* >```npm i gatsby-plugin-react-helmet@3.0.12 react-helmet@5.2.0```
* 67: Go to ```/gatsby-config.js``` & follow inst [```52```]
* 68: Create head @ ```/src/components/head.js``` & follow inst [```53```]
* 69: Go To index.js @ ```/src/pages/index.js``` & import head ComponentLinks, follow inst [```54```]
* 70: ```Similarly``` Go To ```all other Pages``` add head ComponentLinks
>Done--- Now Let us Push it to git
---
* 71: ```git status``` : Check the status of the git repo.
* 72: ```git add .``` : Add all the required changes to git repo.
* 73: ```git commit -m "final gatsby-site"``` : Commit - Save all changes with a message.
* 74: ```git remote add origin https://* github.com/Ajesh777/* gatsby-bootcamp.git``` : Connecting to your created repo @ github site, copy your link @ create repo, option.
* 75: ```git push -u origin master```: Now finally push all contents to this github repo.
>Done--- Now we are ready fo Deploying to Netlify
---
* 76: Go to the link ```https://www.netlify.com/``` & sign up for ```free```
* 77: Give access to your github account.
* 78: Go to your email, inbox & then Verify your email account.
* 79: Now go back hit ```create a new site```
* 80: Select your github repo we just created
* 81: Select Advanced Build Settings
* 82: Click on variables & add the neccesary .env variables we created for contentful.
* 83: Finaly Click Deploy Site
>Done---
---
Complete Instruction For Bootcamping with Gatsby:
Go to terminal & type:
>npm run develop
Go To index.js @ /src/pages/index.js & follow inst [1-2]
Create blog.js @ /src/pages/blog.js & follow inst [3-5]
Create about @ /src/pages/about.js & follow inst [6-8]
Create contacts @ /src/pages/contacts.js & follow inst [9-11]
Go To index.js @ /src/pages/index.js & create contacts PageLinks, follow inst [12-13]
Go To contacts.js @ /src/pages/contacts.js & create Home PageLinks, follow inst [14-15]
Go To about.js @ /src/pagabout.js & create Home & Contacts PageLinks, follow inst [16-17]
Create components directory @ /src/components
Create footer @ /src/components/footer.js & follow inst [18-20]
Go To index.js @ /src/pages/index.js & import Footer ComponentLinks, follow inst [21.1-21.2]
Similarly Go To all other Pages add Footer ComponentLinks
Create header @ /src/components/header.js & follow inst [22-24]
Go To index.js @ /src/pages/index.js & import header ComponentLinks, follow inst [25.1-25.2]
Similarly Go To all other Pages add header ComponentLinks
Create layout @ /src/components/layout.js & follow inst [26-28]
Go To index.js @ /src/pages/index.js & Delete header & footer components & then import layout ComponentLinks, follow inst [29.1-29.2]
Similarly Go To all other Pages add layout ComponentLinks
Create styles directory @ /src/styles & In terminal install gatsby-plugin--sass:
>Ctrl+c
>npm install --save node-sass gatsby-plugin-sass
Create gatsby-config.js directory @ /gatsby-config.js & follow inst [30]
Create index.scss directory @ /src/index.scss
Restart the server, using the terminal cmd:
>npm run develop
Now go to link http://links.mead.io/gatsbystyles & copy the raw code & paste in /src/styles/index.scss
Create header.module.scss @ /src/components/header.module.scss & follow inst [31]
Go To header.js @ /src/pages/header.js & import header.scss
Go to /gatsby-config.js & follow inst [32]
Go to link localhost:8000/___graphql & type query:
>query { site { siteMetadata { title}}}
Go To header.js @ /src/components/header.js & follow inst [33]
Go To footer.js @ /src/components/footer.js & follow inst [34]
Now for installing the new GraphQl playground, go to terminal:
>Ctrl+c
Create .env.dev @ /.env.dev & follow inst [35]
>npm i --save-dev env-cmd
Now go to /package.json & change under scripts/develop/"env-cmd .env.dev gatsby develop", type: GATSBY_GRAPHQL_IDE=playground
>npm run develop
Now Create Posts directory @ /src/posts
Create gatsby.md @ /src/posts/gatsby.md
Create react.md @ /src/posts/react.md
Now Install gatsby plugin for filesystem, go to terminal:
>Ctrl+c
>npm i gatsby-source-filesystem@2.0.28
Go to /gatsby-config.js & follow inst [36]
>npm run develop
Go to link localhost:8000/___graphql & type query:
>query { allFile { edges { node { name, dir, extension }}}}
Now Install gatsby plugin for prarsing filesystem, go &
>Ctrl+c
>npm i gatsby-transformer-remark@2.3.8
Go to /gatsby-config.js & follow inst [37]
>npm run develop
Go to link localhost:8000/___graphql & type query:
>query { allMarkdownRemark { edges { node { frontmatter { title date }, html, excerpt, wordCount { paragraphs sentences words } }}}}
Go To blog.js @ /src/pages/blog.js & follow inst [38]
Create gatsby-node.js @ /gatsby-node.js & follow inst [39]
Now Create templates directory @ /src/templates
Create blog.js @ /src/templates/blog.js & follow inst [40]
Go To gatsby-node.js @ /gatsby-node.js & follow inst [41]
Go To blog.js @ /src/pages/blog.js & follow inst [42]
Now Install gatsby plugin for fetching, prarsing, linking images, go &
>Ctrl+c
>npm i gatsby-plugin-sharp@2.0.32 gatsby-remark-images@3.0.10 gatsby-remark-relative-images@0.2.2
Go to /gatsby-config.js & follow inst [43]
>npm run develop
create a folder for each post in post directory for structuring
Now create footer.module.scss @ /src/components/footer.module.scss & follow inst [44]
Now import footer.module.scss @ /src/components/footer.js, inst [44.1]
Now create blog.module.scss @ /src/pages/blog.module.scss & follow inst [45]
Now import blog.module.scss @ /src/pages/blog.js, inst [45.1]
Now for cms, we will use contentful, so go to link www.contentful.com & create an account.
Now Install gatsby plugin for contentful, go &
>Ctrl+c
>npm i gatsby-source-contentful
Go to /gatsby-config.js & follow inst [46]
>npm run develop
Go to link localhost:8000/___graphql & type query:
>query { allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) { edges { node { title slug publishedDate(formatString: "DD-MMM-YYYY")}}}}
Go To blog.js @ /src/pages/blog.js & follow inst [47]
Go To gatsby-node.js @ /gatsby-node.js & follow inst [48]
Go To blog.js @ /src/templates/blog.js & follow inst [49]
Install plugin to parse body from contentful
>ctrl+c
>npm i @contentful/rich-text-react-renderer
Go To blog.js @ /src/templates/blog.js & follow inst [50]
Create 404.js @ /src/pages/404.js & follow inst [51]
Now install Helmet plugin for configuring head of page
>ctrl+c
>npm i gatsby-plugin-react-helmet@3.0.12 react-helmet@5.2.0
Go to /gatsby-config.js & follow inst [52]
Create head @ /src/components/head.js & follow inst [53]
Go To index.js @ /src/pages/index.js & import head ComponentLinks, follow inst [54]
Similarly Go To all other Pages add head ComponentLinks
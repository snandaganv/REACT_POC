# Getting Started with AG Storybook

This Design System was bootstrapped with React, TailwindCSS, Storybook, and Material-UI.
  
## GitHub repo

Git clone the repo: https://github.com/arisglobal/agcp-ui

In the project directory, you can run:

### `npm install`

### `npm run storybook`

Runs the storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.

Please create a new branch out of master. 

### git checkout -b `<branch name example: PLAT-123-feature>`

Commit your changes to that local branch and create a pull request to be reviewed and approved by your peers. Once the changes are approved, it'll be merged into master branch and deployed.

stage your code for commiting by using command mentioned below:
### git add .

commit your changes by using command mentioned below:
### git commit -m `<PLAT-123 and your message goes in here>`

command push your changes to your local branches:
### git push origin `<branch name example: PLAT-123-feature>`

Once the changes are successfully pushed to you local branch, it should give you a URL to create a pull request. Click on the link or copy/paste it in the browser and follow the instructions on GitHub to rasie a Pull Request.

#### How to add Actions to stories

https://storybook.js.org/docs/react/essentials/actions

#### How to add Controls to stories

https://storybook.js.org/docs/react/essentials/controls

#### Here's a list of MUI Components being used in this Storybook

https://mui.com/material-ui/api/avatar/


## NPM Publish to GitHub Packages

To publish your npm package to GitHub Packages, all you need to do is to run the publish GitHub actions workflow by clicking on 
"Actions" tab in agcp-ui repo, then select "Publish AG Components to GitHub Packages" workflow in the left nav, 
manually trigger the workflow to execute.  If successful, your package should be published to GitHub Packages.

Please note you cannot publish the same version for the same package to GitHub Packages multiple times.  You will need to 
bump up your package version and publish to GitHub Packages.

For more information, refer to https://confluence-arisglobal.atlassian.net/wiki/spaces/ARCH/pages/114917442/Maven+Release+Automation+with+GitHub+Actions+and+GitHub+Packages+for+AG+Microservices#NPM-Publish-to-GitHub-Packages.

Chat App with OAuth - Login with Github
===

## By Sharon Miller
 
  
## Install 
* NPM install using included package.lock file on front end
* NPM install using included package.lock file on backend
* use sample.env file to configure environment variables 

## Requirements  
#### Configuration  
* **.babelrc** -- with all dependencies and dev-dependencies 
* **.eslintrc.json** -- with the class .eslintrc.json file
* **.gitignore** -- with a robust gitignore
* **.eslintignore** -- with the class .eslintignore
* **yarn.lock** -- with the yarn lockfile
* **package.json** -- with all dependencies and dev-dependencies 
* **webpack.config.js** -- with webpack config
* **src/** -- containing the frontend code
* **src/main.js** -- renders the app
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base
* **src/style/_vars.scss** -- sass variables
* **src/style/_reset.scss** -- sass reset 
* **src/style/_base.scss** -- base styles 
* **src/style/_layout.scss** -- layout styles

#### Features

#### backend
 
#### frontend 
* reducer for managing your token
* auth actions file for making signup and login requests, storing, and clearing the token in the app state. 
  * cookie is removed when the token is removed from the app state
* has the following front end routes:
  * `/landing` - display a login with google anchor
  * `/chat` - display a p tag that says chat 
* add as many other routes or pages as you would like
* create an index.html with an anchor tag pointing to the github auth page
* configure the query string with correct key value pairs


# express-backend-skeleton
  Express backend skeleton app built using TS

# Features

  * Custom built logger includes:
    * ```newLine()``` - Logs a line gap
    * ```horizontalRule()``` - Logs a horizontal rule
    * ```log()``` - Standard log
    * ```logInfo()``` - Logs info message
    * ```logError()``` - Logs errors    
  * Middleware ```httpLogger()``` to log http request & response
  * Model-Controller architecture
  * Provision to use ```EJS``` to render templates/ dynamic HTML

# Setup Instructions

  * Download or clone the repo
  * Open console in root directory
  * Do ```npm i``` OR ```npm install``` to install dependencies
  * ```Create and use .env file as needed```
  * To use ```EJS```:
    * Do ```npm i ejs``` to install EJS package
    * Uncomment or Add in ```server.ts```:
      * ```server.engine('.html',require('ejs').renderFile);```
      * ```server.set('view engine', 'html');```
      * Serve static content, Dynamic HTML/EJS templates, etc. from /public folder
  
# Scripts

  * ```npm start``` OR ```npm run dev``` to run the application
  
 

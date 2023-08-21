TWO FOLDERS:
*Note: 
        Add all components in App.js as Route
        To start frontend
                on command line write below commands:
                        cd ./frontend/
                        npm start
        Shortcut to create any function when craete new componet file 
                new abc.jsx
                type - rafce and then enter

*** TO make website responsive add below line in Index.html
          <meta name="viewport" content="width=device-width, initial-scale=1.0">

        In all css files use vw instead of px/vmax

        
--- frontend ---
        step 1: npm install -g create-react-app
                create-react-app test-project / . (. for inside same folder)

        step 2: install libaraies
                npm i react-router-dom three axios overlay-navbar @reduxjs/toolkit
                npm install @mui/material @emotion/react @emotion/styled
                npm i @mui/icons-material react-icons
                npm i react-redux
                npm i react-alert react-alert-template-basic

        step 3: in App.js, import components/home.Home as deafult route
                create Header.jsx
                add google fonts Roboto, Ubunto in App.css
                create Home.jsx and Home.css
                Home.jsx --> used three js for 3d effect of moon
                         --> on command line install for timeline - npm i @mui/lab
                         --> used Timeline.jsx
                         --> div homekills 
                                - homeCubeSkills
                                - homeCubeShadow
                                - homeSkillsBox
                Timeline.jsx
        
        step 4: Footer 
        
        step 5: About

        step 6: Projects
        step 7 : Contact

--- backend ---
*NOTE : to run backend : npm run dev

path on commant line : Full Stack Development\portfolio website
        - npm init
                under entry point : backend/server.js
        - npm i express mongoose dotenv cloudinary cookie-parser nodemailer jsonwebtoken

        package.json :
                scripts{
                        "dev": "nodemon backend/server.js"
                }
                "type" :"module",

                        By default, we’ll be using ES5, 
                        and it’ll be required to use require (const express = require("express")) to pull in modules. 
                        As we move forward with ES6 and beyond, it’s really best for us to start using ES6 classes as well as import and export statements. 
                        To do this, we’ll need Babel in order to interpret our ES6

                        You can now use "type": "module" in your package.json file 
                        and this will enable the ES6 import. No extra installations needed.
        
        app.js:
                import all packages and routes that require 

        server.js:
                - import app.js, dotenv
                - give path name where server is running from config file.
                - Connect to congfig.env file 
                - app.listen : this means app with listen to port provided 

        config.env: 
                all variable file
        
        config/database.js
                - This file connect to mongodb
                - It use path from config.env with name "MONGO_URI"
                - export connectDatabase function
                - import connectDatabase in "server.js" 

        model/user.js
                - create user schema and import in controller.js
        
        routes/userRoute.js
                - import userRoute.js in app.js
                - import all API routes from contoller.js API

        controller/userController.js
                - create API 
                        - registerUser
                        - login : find user by email and pswd and create session by setting token in cookie
                        - logout : end user session by providing null as token
                        - getAllUsers (if admin)
                        - myProfile
                        - contact -- for this create file utils/sendMail.js 
                        - updateUser (if its admin)
                                - to update skills import cloudinary
                                - login to cloudinary
                                        pass : Waheguru@10 (W caps)
                        - addTimeline
                        - addProject
                        - deleteTimeline
                        - deleteProject
                                
        
        middleware/auth.js
                - check if user is authencticated or not ie login or not
                - in this,we will be finding token exists or not
                - if token exists, we will decode token and find user by id 

        utils/sendMail.js
                - signup to mailTrap.com 
                - email: gmail mail
                - pass : waheguru
                - mailTrap -> email testing -> my inbox -> integrations select node js
                - copy all code and paste in sendMail.js file 


MONGODB 
        - Navigate to myPortfolio database 
                name created as we gave it in config.env
                MONGO_URI = "mongodb://0.0.0.0:27017/myportfolio"
        - manually create new document by following step 
                Add data -> insert document at line 8 as below 
                        "name": "Daljeet Kaur"
                        "email" : "daljeet@gmail.com"
                        "password" : "daljeet10"
        

POSTMAN 
        - test login API by url :
                http://localhost:4000/api/v1/login : post
                body : 
                        {
                                "email":"daljeet@gmail.com",
                                "password":"daljeet10"
                        }
              

Connect Backend and frontend
        split terminal 1 for backend and other for frontend
        for frontend write command "cd ./frontend/"
        start frontend command  -> npm start
        start backend command -> npm run dev

WORFLOW FOR REDUX 
        ACTIONS --> REDUCERS --> STORE --> FRONTEND VIEW --> ACTIONS ....


        step 1: create Store.js file under frontend 
                portfolio website/frontend/src/Store.js
                        create store in store.js
                        add redux in Index.js
                                i.e add <Provider store={store}><App /></Provider>
        
        Step 2: Create folders "actions" and "reducers" under frontend
                portfolio website/frontend/src/actions/
                portfolio website/frontend/src/reducers/user.js
        Inspect on website and check Redux store
        **For Redux, there should be "Redux Devtools" extension in browser installed

        step3 3:  portfolio website/frontend/src/reducers/user.js
                        Reducer will take input from Acions file by default
                        create reducer for all states i.e for request, success, failure
        
        step 4: portfolio website/frontend/src/Store.js
                        paas userReducer as user coming from reducer..

        step 5: portfolio website/frontend/src/actions/user.js
                dispatch different cases 
                        ie : REQUEST, SUCCESS, failure for multiple routes 
                        this data will go to Reducer as ction files cannot directly interact with STORE
        
        Step 6: App.js
                Add useEffect which will accept Actions file function name (getUser())
       
        step 7: - Add const dispatch in all relevent component files for which you have created actions
                        Example : created loginUser function in actions file, 
                         so add dispatch in login component .
                - Add loginReducer file in store also


TO SYNC BACKEND AND FRONTEND
        add below code in package.json 
                "proxy":"http://192.168.1.2:4000"
                        where http://192.168.1.2 == frontend network 
                        4000 == backend localhost
        
        **Restart servers




        






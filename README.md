# onlineimageconverter
An image converter that converts png to jpeg

Step1:Create a folder on the desktop with name image converter
Step2:Create the above two files converter.js and index.html in the same folder
Step3:Create another folder named upload in image converter folder
Step4:So now the image converter folder has two files and a folder named upload
Step5:Install nodejs from internet preferably the latest one(add path in the onscreen settings)
Step6:navigate through the image converter folder using cd desktop/image converter
Step 7:type npm init
Step 8:This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them
Step 9:Now install Express in the image converter directory and save it in the dependencies list. For example:$ npm install express --save
Step 10:Now install the following dependencies by typing them one by one in cmd of image converter folder
         npm install body-parser
         npm install --save jimp
         npm i express-fileupload
         npm i -S app-root-path
Step 11:type node converter.js.Then you will see server started.type in browser  localhost:8000/
Step 12:You will see a form upload page.Upload png image and jpeg gets automatically downloaded.
        NOTE-Type wrror shall be seen due to callback but the file gets downloaded
        
        

         
         




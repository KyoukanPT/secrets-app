 <h2>Secrets App</h2>

<p>Instructions on how to download the source files and use the App: </p>

<h3>Terminal (Chosen directory to clone the files - Recommended --> Desktop)</h3>

- git clone https://github.com/KyoukanPT/secrets-app.git

<hr>

<h3>Node Installation</h3>
 
- Download and install <a href="https://nodejs.org/en/download"> Node.js </a> <br> 

<hr>

<h3>Project Folder Directory (Terminal)</h3>

- npm install<br>
- npm install <a href="https://expressjs.com/en/starter/installing.html"> Express </a> <br>
- npm install <a href="https://ejs.co/"> EJS </a> <br>
- npm install <a href="https://www.npmjs.com/package/body-parser"> Body Parser </a> <br>
- npm install <a href="https://www.npmjs.com/package/mongoose"> Mongoose </a> <br>
- npm install <a href="https://www.npmjs.com/package/dotenv"> Dotenv </a> <br>
- npm install <a href="https://www.npmjs.com/package/express-session"> Express Session </a> <br>
- npm install <a href="https://www.npmjs.com/package/mongoose-find-or-create"> Mongoose Find Or Create </a> <br>
- npm install <a href="https://www.npmjs.com/package/passport"> Passport </a> <br>
- npm install <a href="https://www.npmjs.com/package/passport-facebook"> Passport Facebook </a> <br>
- npm install <a href="https://www.npmjs.com/package/passport-google-oauth20"> Passport Google Auth 2.0 </a> <br>
- npm install <a href="https://www.npmjs.com/package/passport-local-mongoose"> Passport Local Mongoose </a> <br>
- node app.js <br>

<hr>

<h3>How to use this App locally (In Your Computer)</h3>
- Replace the code in line 27 (app.js) with the following: <strong>mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {useNewUrlParser: true, useUnifiedTopology: true});</strong><br>
- Open a new terminal tab and run the following command: <strong>mongod</strong><br>
- After you successfully connect to MongoDB, open another new terminal tab and run the following command: <strong>mongo</strong><br><br>

<hr>

<h3>MongoDB Documentation</h3>
- Installation instructions - <strong> https://docs.mongodb.com/manual/administration/install-community/ </strong> <br>
- How to use mongo shell to query and manipulate the data in your database - <strong>https://docs.mongodb.com/manual/crud/</strong><br><br>

<hr>

<h3>How to use MongoDB Cloud Database (MongoDB Atlas)</h3>
- Line 27 (app.js) - Replace <strong><"ADMIN"></strong> and <strong><"PASSWORD"></strong> with your Atlas credentials <br>
- Line 27 (app.js) - Replace <strong>/yourDatabaseName</strong> with the name that you want to give to your database <br>
- Follow this Atlas tutorial to learn how to get started - <strong>https://docs.atlas.mongodb.com/getting-started/</strong> <br>

<hr>

<h3>How to use the App?</h3>
<p> - After all the above steps, go to <a href="http://localhost:3000/">Localhost</a>.</p>
<p> - The user should be first redirected to <strong>views/home.ejs</strong>.</p>
<p> - If the user is already registered, you should redirect the user to <strong>views/login.ejs</strong> where the credentials should be used to login.</p>
<p> - In case the user didn't register yet, you should redirect the user to <strong>views/register.ejs</strong>.</p>
<p> - After a successful register/login, the users should be redirected to <strong>views/secrets.ejs</strong> to be able to submit their own secret.</p>
<p> - If anyone wants to check which secrets have been submitted, without needing to register/login, they should be redirected to <strong>views/secrets.ejs</strong>.</p>
<h6>Note: Only 1 secret can be submitted per user. If you submit another secret, the previous one will be deleted.</h6>

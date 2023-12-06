<h2>Secrets App</h2>

<p>Instructions on how to download the source files and use the App: </p>

<h3>Terminal (Chosen directory to clone the files - Recommended --> Desktop)</h3>

1 - git clone https://github.com/KyoukanPT/secrets-app.git

<hr>

<h3>Node Installation</h3>
 
 2 - 2 - Download and install <a href="https://nodejs.org/en/download"> Node.js </a> <br> 

<hr>

<h3>Project Folder Directory (Terminal)</h3>

3 - node app.js
4 - npm install express <br>


<hr>

<h3>How to use this App locally (In Your Computer)</h3>
4 - Replace the code in line 27 (app.js) with the following: <strong>mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {useNewUrlParser: true, useUnifiedTopology: true});<br></strong>
5 - Open a new terminal tab and run the following command: <strong>mongod</strong><br>
6 - After you successfully connect to MongoDB (Step 5), open another new terminal tab and run the following command: <strong>mongo</strong><br><br>

<h3>MongoDB Documentation</h3>
- Installation instructions - <strong> https://docs.mongodb.com/manual/administration/install-community/ </strong> <br>
- How to use mongo shell to query and manipulate the data in your database - <strong>https://docs.mongodb.com/manual/crud/</strong><br><br>

<h3>How to use MongoDB Cloud Database (MongoDB Atlas)</h3>
- Line 11 (app.js) - Replace <strong><"ADMIN"></strong> and <strong><"PASSWORD"></strong> with your Atlas credentials <br>
- Line 11 (app.js) - Replace <strong>/yourDatabaseName</strong> with the name that you want to give to your database <br>
- Follow this Atlas tutorial to learn how to get started - <strong>https://docs.atlas.mongodb.com/getting-started/</strong> <br>

<h3>How to use the App?</h3>
<li>The user should be first redirected to <strong>views/home.ejs</strong>.</li>
<li>If the user is already registered, you should redirect the user to <strong>views/login.ejs</strong> where the credentials should be used to login.</li>
<li>In case the user didn't register yet, you should redirect the user to <strong>views/register.ejs</strong>.</li>
<li>After a successful register/login, the users should be redirected to <strong>views/secrets.ejs</strong> to be able to submit their own secret.</li>
<li>If anyone wants to check which secrets have been submitted, without needing to register/login, they should be redirected to <strong>views/secrets.ejs</strong>.</li>
<h4>Note: Only 1 secret can be submitted per user. If you submit another secret, the previous one will be deleted.</h4>

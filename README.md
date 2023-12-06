<h2>Secrets App</h2>

<p>Instructions on how to download the source files and use the App: </p>

<h3>Terminal (Chosen directory to clone the files - Recommended --> Desktop)</h3>

1 - git clone https://github.com/KyoukanPT/secrets-app.git

<hr>

<h3>Initial Setup</h3>

2 - Download and install <a href="https://nodejs.org/en/download"> Node.js </a> <br>
3 - Download and install <a href="https://www.mongodb.com/docs/manual/installation/"> MongoDB </a><br>
3 - Terminal: npm install mongoose --save<br>

<hr>

<h3>How to use the App?</h3>
<li>The user will be first redirected to <bold>views/home.ejs</bold></li>
<li>If the user is already registered, you should redirect the user to <bold>views/login.ejs</bold> where the credentials should be used to login.</li>
<li>In case the user didn't register yet, you should redirect the user to <bold>views/register.ejs</bold></li>
<li>After a successful register/login, the users should be redirected to <bold>views/secrets.ejs</bold> to be able to submit their own secret.</li>
<li>If anyone wants to check which secrets have been submitted, without needing to register/login, they should be redirected to <bold>views/secrets.ejs</bold></li>
<h4>Note: Only 1 secret can be submitted per user. If you submit another secret, the previous one will be deleted.</h4>

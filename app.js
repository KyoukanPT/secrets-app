require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb+srv://admin-tiago:uku3p8uero@cluster0.2h90q.mongodb.net/userDB", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;
db.once("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("We're connected to the Database!");
});

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
    provider: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://kyoukanpt-secrets-app.herokuapp.com/auth/google/secrets"
},
    (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate({ username: profile.id, provider: "Google", email: profile._json.email }, (err, user) => {
            return cb(err, user);
        });
    }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "https://kyoukanpt-secrets-app.herokuapp.com/auth/facebook/secrets"
},
    (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate({ username: profile.id, provider: "Facebook", email: profile._json.email }, (err, user) => {
            return cb(err, user);
        });
    }
));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/auth/google",
    passport.authenticate("google", { scope: ["profile"] }));

app.get("/auth/google/secrets",
    passport.authenticate("google", { failureRedirect: "/login" }), (req, res) => {
        console.log("Successful authentication!");
        res.redirect("/secrets");
    });

app.get("/auth/facebook",
    passport.authenticate('facebook'));

app.get("/auth/facebook/secrets",
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    (req, res) => {
        console.log("Successful authentication!");
        res.redirect('/secrets');
    });

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/secrets", (req, res) => {
    User.find({ secret: { $ne: null } }, (err, foundUsers) => {
        if (err) console.error(err);
        res.render("secrets", { usersWithSecrets: foundUsers });
    });
});

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

app.get("/submit", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("submit");
    } else {
        res.redirect("/login");
    };
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.register({ username: username }, password, (err, user) => {
        if (err) {
            console.error(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, () => {
                res.redirect("/secrets");
            });
        }
    });
});

app.post("/login", (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    };

    req.login(user, (err) => {
        if (err) console.error(err);
        passport.authenticate("local")(req, res, () => {
            res.redirect("/secrets");
        });
    });
});

app.post("/submit", (req, res) => {
    const submittedSecret = req.body.secret;
    const userId = req.user.id;

    User.findById(userId, (err, foundUser) => {
        if (err) console.error(err);
        if (foundUser) {
            foundUser.secret = submittedSecret;
            foundUser.save();
            res.redirect("/secrets");
        };
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("App is up and running!");
});
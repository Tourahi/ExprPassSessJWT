const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const {User} = require('./database.js');

// TODO: passport.use();

/** 
 * Author: Ali Azhari 
 * Simple web server
 * */

var express = require('express');
var app = express();

var handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({
    defaultLayout: 'main_logo'}));

app.set('view engine', 'handlebars');

// static resources
app.use(express.static(_dirname + '/public'));
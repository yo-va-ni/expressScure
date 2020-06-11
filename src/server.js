const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const { PassThrough } = require('stream');
const app = express();

// Initialazation
app.set('port', process.env.PORT || 3000);


/**
 * App Variables
 */

/**
 *  App Configuration
*/
app.set('views', path.join(__dirname,'views'));
app.engine('hbs', hbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'),'layout'),
  partialsDir: path.join(app.get('views'),'partial'),
  extname: "hbs",
  helpers: {
    toJSON : function(object) {
      return JSON.stringify(object,null,2);
    }
  }
}));
app.set('view engine','hbs');


/**
 * Routes Definitions
 */
app.use(require('./routes/index'));
app.use(require('./routes/user/users'));


// Static Files
app.use(express.static(path.join(__dirname,'public')));

/**
 * Server Activation
 */

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
})
//CREATING A SERVER
//express is the npm that we installed
const express = require("express");
//we are declaring the express application
const app = express();
//we are creating our PORT
const PORT = 3000;
//app is going to listen at the PORT 
app.listen(PORT, () => {
    console.log(`Listening at: http://localhost:${PORT}`);
});
//install npm install -g nodemon
//nodemon is used to easily make changes to server without Ctrl-C every time
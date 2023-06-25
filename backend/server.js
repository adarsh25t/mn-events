const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'})
const app = require('./app');

const DB = process.env.DATABASE.replace('<password>',process.env.DB_PASSWORD)
const port = process.env.PORT || 3500


/* ------DATABASE CONNECTION----- */
mongoose.connect(DB,{
    useNewUrlParser: true,
}).then(con => {
    console.log("DB connected...");
})


app.listen(port,()=>{
    console.log(`servser start on port ${port}`);
})



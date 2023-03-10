const mongoose = require("mongoose");
// require("dotenv").config({ path: ".env.local" });
require("dotenv").config({ path: "./Backend/.env.local" }); //Use when npm run both

const MONGO_PASS=process.env.MONGO_PASS

// const URIstring="mongodb://localhost:27017/Yahya?directConnection=true"
const URIstring =
  // "mongodb+srv://Yahya:samyaya2003305@notesapp.k0xfpfx.mongodb.net/?retryWrites=true&w=majority";
  `mongodb+srv://Yahya:${MONGO_PASS}@notesapp.k0xfpfx.mongodb.net/mydatabase`;
const connectMongo = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(
    URIstring,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log("Connection successful")
      }
      // console.log(err);
    }
  );
};
module.exports = connectMongo;
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/Yahya", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(
//   ()=>{console.log("db connect")}
// ).catch(
//   (err)=>{console.log(err)}
// );

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("Connected to MongoDB!");
// });

// module.exports = db;

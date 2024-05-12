const mongoose = require("mongoose");

const connectDatabase = () => {
  const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
  mongoose
    .connect(`mongodb+srv://admin:${password}@cluster0.bgtkqga.mongodb.net/db_app`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;







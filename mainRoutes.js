module.exports = app => {
    app.use("/v1", require("./models/userModel/routes/index"))
  
  };
const app = require("./index");
const connect = require("./configs/db");

app.listen(5567, async () => {
  try {
    await connect();
    console.log("listening on port 5567");
  } catch (e) {
    console.log(e.message);
  }
});

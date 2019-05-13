const express = require("express");
const messageController = require("./controllers/message_controller");
const app = express();
app.use(express.json());
app.use(express.static("../public/build"));

app.get("/api/messages", messageController.read);

app.post("/api/messages", messageController.create);

app.put("/api/messages/:id", messageController.update);

app.delete("/api/messages/:id", messageController.delete);

const Port = 3001;
app.listen(Port, () => console.log(`Open on port: ${Port}`));

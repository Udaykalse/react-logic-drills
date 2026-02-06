const express = require("express");
const userRouter = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

// app.use(express.json());
app.use(express.json());

console.log("server");

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server is Runing on http://localhost:${PORT}`);
});

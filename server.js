import express from "express";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// GET

app.get("/getSimple", (req, res) => {
  res.send(`Hello welcome to nodejs👋`);
});

app.get("/getReq", (req, res) => {
  const name = req.query.name;
  const msg = req.query.msg;
  if (!name || name.trim() === "") {
    //res.status(400).send("Name is required");
    res.status(400).json({
      statusCode: 400,
      status: "error",
      message: "Name is required!",
    });

    return;
  }
  res.status(200).json({
    statusCode: 200,
    status: "sucess",
    message: `Hello ${name}, ${msg} 👋`,
  });
  //res.send(`Hello ${name}, ${msg} 👋`);
});

app.post("/postReq", (req, res) => {
  const { name, msg } = req.body || {};
  if (!name || name.trim() === "") {
    return res
      .status(400)
      .json({ statusCode: 400, status: "error", message: "Name is required!" });
  }
  return res.status(200).json({
    statusCode: 200,
    status: "success",
    message: `Hello ${name.trim()}, ${(msg ?? "Welcome").toString().trim()} 👋`,
  });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const express = require("express");

const studentRouter = require("./routes/student");
const employeeRouter = require("./routes/employee");

const app = express();
const SERVER_PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Application-level middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.log("Error Handling Middleware: ", err);
    res.status(500).send("Something broke!");
})

app.use("/api/v1/student", studentRouter);
app.use("/api/v1/employee", employeeRouter)

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
})
const express = require("express");
const app = express();

const logger = require("./middlewares/logger"); // ✅ function reference
const userRoutes = require("./routes/userRoutes"); // ✅ router reference

app.use(express.json());
app.use(logger);         // ✅ pass function reference
app.use("/api", userRoutes); // ✅ pass router reference

app.get("/", (req, res) => res.send("Express API Running"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

// import express module
import express, { Application, Request, Response } from "express";

// import our route
import router from "./routes/route";

// define the port
const PORT = process.env.PORT || 3000;

// create the application object
const app: Application = express();

// set ejs
app.set("view engine", "ejs");

// add the router
app.use("/api", router);

// use static files
app.use(express.static("public"));

// render the main page
app.get("/", (req: Request, res: Response) =>
  res.render("./../views/index.ejs")
);

// test
app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "pass!" });
  res.send("hello");
});

// render the error page
app.use((req: Request, res: Response) =>
  res.status(404).render("./../views/404.ejs")
);

// run the server
app.listen(PORT, () => {
  console.log(`the server is running on port http://localhost:${PORT}`);
});

// export the application object to test the endpoints
export default app;

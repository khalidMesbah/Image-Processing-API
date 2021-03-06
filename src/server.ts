// import express module
import express, { Application, Request, Response } from "express";
import path from "path";
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
app.use(express.static(path.join(__dirname, "../public")));

// render the home page
app.get("/", (req: Request, res: Response) =>
  res.render(path.resolve(__dirname, `../views`, `index.ejs`))
);

// render the error page
app.use((req: Request, res: Response) =>
  res.status(404).render(path.join(__dirname, "../views", "404.ejs"))
);

// run the server
app.listen(PORT, () => {
  console.log(`the server is running on port http://localhost:${PORT}`);
});

// export the application object to test the endpoints
export default app;

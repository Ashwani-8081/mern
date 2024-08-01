import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js"






// mongodb+srv://codewithashwani:mZmV5B1EytWaP18@cluster0.qym13p5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


const app= express();

app.use(morgan("dev"));
app.use(express.json({limit: "30mb",  extended:true}));
app.use(express.urlencoded({limit: "30mb",  extended:true}));
app.use(cors());


app.use("/users",userRouter);
app.use("/tour",tourRouter);

// mZmV5B1EytWaP18
// const MONGODB_URL = "mongodb+srv://codewithashwani:mZmV5B1EytWaP18@cluster0.qym13p5.mongodb.net/tr_db?retryWrites=true&w=majority&appName=Cluster0"


// ZOuMFFyoWBO55dpf
           
const MONGODB_URL = "mongodb+srv://tukonhai136:ZOuMFFyoWBO55dpf@cluster0.diq9oym.mongodb.net/tr_app?retryWrites=true&w=majority&appName=Cluster0";

const port = 4000;

mongoose
.connect(MONGODB_URL)
.then(() =>{
    app.listen(port, () =>
     console.log(`Server running on port ${port}`));
}).catch((error) =>console.log(`${error} did not connect`));

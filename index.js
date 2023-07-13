import  express  from 'express';
import matchRouter from './Routes/MatchRoutes.js';
import teamRouter from './Routes/TeamRoutes.js';


const app=express();


app.use(express.json());
app.use("/match", matchRouter);
app.use("/team",teamRouter)
const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

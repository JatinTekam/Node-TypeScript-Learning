import app from "./src/app.js";
import {config} from "./src/config/config.js";
import dbConnction from "./src/config/db.js";



const startServer=async()=>{

    await dbConnction();

    const port = config.port;
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })

}

startServer();
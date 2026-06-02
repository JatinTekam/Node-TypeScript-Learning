import app from "./src/app.js";
import { config } from "./src/config/config.js";
import dbConnction from "./src/config/db.js";

const startServer = async () => {
  try {
    await dbConnction();

  const port = config.port;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  } catch (error) {
    console.log(error.message)
    process.exit(1);
  }
};

startServer();

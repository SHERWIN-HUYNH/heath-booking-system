const app = require("./src/app");
require('dotenv').config();
const PORT =  3563
const server = app.listen(PORT, () => 
   { console.log("Server running on port " + PORT)
});

process.on("SIGINT", () => {
    server.close(() => {
        console.log("Server closed");
        process.exit(0);
    })
})
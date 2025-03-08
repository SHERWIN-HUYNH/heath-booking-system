const mongoose = require("mongoose");
const connectString = "mongodb://localhost:27017/health-booking-system";

// code here
// SingleTon Pattern
class Database {
    constructor() {
        this.connect();
    }
    connect(type = 'mongodb') {
        if (1 == 1){
            mongoose.set('debug', true);
            mongoose.set('debug',{color: true});
        }
        mongoose.connect(connectString).then(() => console.log("Connected MongoDB successfully"))
            .catch(err => console.log(err))
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
const instanceMongoDb = Database.getInstance();
module.exports = instanceMongoDb
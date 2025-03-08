const User = require("../models/user.model");

const testDB = async () => {
    try {
        const user = await User.create({ name: "John Doe", email: "john@example.com","phone":"092342","password":"123456" });
        console.log("Inserted User:", user);
        return user;
    } catch (error) {
        console.error("Database insertion error:", error);
    }
};

module.exports = {testDB}

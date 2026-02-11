const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const USER = require("./Models/User");
require("dotenv").config();

async function seedAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 30000, // 30s timeout
    });
    console.log("✅ Connected to MongoDB");

    const email = "only1maniac007@gmail.com";
    const phoneNumber = "07086440726";
    const password = "Admin123!";

    const existingAdmin = await USER.findOne({ email });

    if (existingAdmin) {
      // Admin exists – update password just in case
      const hashedPassword = await bcrypt.hash(password, 10);
      existingAdmin.password = hashedPassword;
      await existingAdmin.save();
      console.log("⚡ Admin already exists – password updated!");
    } else {
      // Admin does not exist – create new
      const hashedPassword = await bcrypt.hash(password, 10);
      const admin = new USER({
        firstName: "Admin",
        lastName: "Mojola",
        email,
        phoneNumber,
        password: hashedPassword,
        role: "admin",
      });
      await admin.save();
      console.log("✅ Admin seeded successfully!");
    }
  } catch (err) {
    console.error("❌ Error seeding admin:", err);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

seedAdmin();

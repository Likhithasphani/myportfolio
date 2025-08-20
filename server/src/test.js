// server/src/test.js
import { connectDB } from "./db.js";
import User from "./models/User.js";

const run = async () => {
  await connectDB();

  const user = new User({
    name: "Likhitha",
    email: "likhitha@example.com",
    password: "mypassword123",
  });

  await user.save();
  console.log("✅ Test user saved!");
  process.exit(0);
};

run();

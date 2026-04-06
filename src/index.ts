import { db } from "./db/index.js";
import { users } from "./db/schema.js";

// 5. Function to insert user
async function insertUser(name: string, email: string) {
  try {
    const [newUser] = await db
      .insert(users)
      .values({ name, email })
      .returning();
    return newUser;
  } catch (error) {
    console.error("Error inserting user:", error);
    throw error;
  }
}

// 6. Function to fetch users
async function fetchUsers() {
  try {
    return await db.select().from(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

async function main() {
  console.log("Starting Drizzle ORM");

  try {
    // 5. Insert users
    console.log("Resetting and inserting users");

    // Clear existing users to match the example exactly
    await db.delete(users);

    // Insert John Doe
    await db.insert(users).values({
      name: "Ossama Majid",
      email: "osamamajid143@gmail.com",
    }).onConflictDoNothing();

    // Insert Alice
    await db.insert(users).values({
      name: "popular shows",
      email: "pshows525@gmail.com",
    }).onConflictDoNothing();

    // 6. Fetch users
    const allUsers = await fetchUsers();

    // 7. Print users list in console
    console.log("\nUsers List:");
    allUsers.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} - ${user.email}`);
    });

  } catch (error) {
    console.error("❌ Critical error:", error);
  } finally {
    process.exit();
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

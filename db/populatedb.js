// This file is meant to be run only once — it structures the database and seeds initial data.
require("dns").setDefaultResultOrder("verbatim");

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_name VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (user_name, text)
VALUES
  ('Alice', 'Welcome to the message board!'),
  ('Bob', 'This is a persistent message!'),
  ('Charlie', 'Hey everyone, glad to be here!');
`;

async function main() {
  console.log("🌱 Seeding message board database...");

  const client = new Client({
    connectionString: process.env.DATABASE_URL, // we'll define this in .env
    ssl: { rejectUnauthorized: false }, // required for Supabase
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("✅ Database structure and seed data created successfully!");
  } catch (err) {
    console.error("❌ Error seeding database:");
    console.error("Name:", err.name);
    console.error("Code:", err.code);
    console.error("Message:", err.message);
    console.error("Stack:", err.stack);
  } finally {
    await client.end();
    console.log("Done.");
  }
}

main();

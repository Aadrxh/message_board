const pool = require("./pool");

// Get all messages
async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages ORDER BY added DESC");
  return result.rows;
}

// Add new message
async function addMessage(user, text) {
  await pool.query(
    "INSERT INTO messages (user_name, text) VALUES ($1, $2)",
    [user, text]
  );
}

module.exports = {
  getAllMessages,
  addMessage,
};

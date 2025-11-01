const pool = require("../config/db");

const Task = {
  async create({ description, priority, dueDate, tags }) {
    const result = await pool.query(
      `INSERT INTO tasks (description, priority, due_date, tags) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [description, priority, dueDate, tags]
    );
    return result.rows[0];
  },

  async getAll() {
    const result = await pool.query(
      `SELECT * FROM tasks ORDER BY due_date ASC`
    );
    return result.rows;
  },
};

module.exports = Task;

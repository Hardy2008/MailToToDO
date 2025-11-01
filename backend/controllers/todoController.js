const Task = require("../models/taskModel");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

const generateTasksFromEmail = async (req, res) => {
  try {
    const { emailText } = req.body;

    const prompt = `
      Extrahiere Aufgaben aus folgender Email und gib sie in JSON aus:
      {"description": "...", "priority": "...", "dueDate": "...", "tags": ["..."]}
      Email: ${emailText}
    `;

    const response = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2,
    });

    const tasks = JSON.parse(response.data.choices[0].message.content);

    const savedTasks = [];
    for (const task of tasks) {
      const saved = await Task.create(task);
      savedTasks.push(saved);
    }

    res.json(savedTasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fehler beim Erstellen der Aufgaben." });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fehler beim Abrufen der Aufgaben." });
  }
};

module.exports = { generateTasksFromEmail, getTasks };

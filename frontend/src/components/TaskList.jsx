import React, { useEffect, useState } from "react";
import axios from "../services/api";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Meine Aufgaben</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 bg-white rounded shadow">
            <div>
              <strong>{task.description}</strong>
            </div>
            <div>Priority: {task.priority}</div>
            <div>Due: {task.due_date}</div>
            <div>Tags: {task.tags?.join(", ")}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

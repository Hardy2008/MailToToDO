import React from "react";
import EmailInput from "./components/EmailInput";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Email to ToDo MicroSaaS</h1>
      <EmailInput />
      <TaskList />
    </div>
  );
}

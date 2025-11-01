import React, { useState } from "react";
import axios from "../services/api";

export default function EmailInput() {
  const [emailText, setEmailText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post("/tasks", { emailText });
      setEmailText("");
      alert("Tasks erfolgreich erstellt!");
    } catch (err) {
      console.error(err);
      alert("Fehler beim Erstellen der Aufgaben");
    }
    setLoading(false);
  };

  return (
    <div className="mb-6">
      <textarea
        className="w-full p-4 border rounded"
        rows="5"
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
        placeholder="Email-Text hier eingeben..."
      ></textarea>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Erstellen..." : "ToDos generieren"}
      </button>
    </div>
  );
}

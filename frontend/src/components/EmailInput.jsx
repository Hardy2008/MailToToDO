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
    <div className="flex justify-center items-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 border border-blue-100 transition-all duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          📨 E-Mail zu ToDos umwandeln
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Füge hier den Text deiner E-Mail ein und klicke auf{" "}
          <span className="font-medium text-blue-600">ToDos generieren</span>.
        </p>

        <textarea
          className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none text-gray-700 placeholder-gray-400 shadow-inner"
          rows="6"
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          placeholder="E-Mail-Text hier eingeben..."
        ></textarea>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`mt-5 w-full py-3 rounded-xl text-white font-medium shadow-md transition-all duration-300 ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
          }`}
        >
          {loading ? "Erstellen..." : "🪄 ToDos generieren"}
        </button>
      </div>
    </div>
  );
}

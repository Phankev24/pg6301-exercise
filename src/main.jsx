import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Application() {
  const [tasks, setTask] = useState([
    { description: "Something" },
    { description: "Something else" },
  ]);

  return (
    <ul>
      {tasks.map((t) => (
        <li>{t.description}</li>
      ))}
    </ul>
  );
}

createRoot(document.getElementById("app")).render(<Application />);

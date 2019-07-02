import React from "react";
import { ThemeConsumer } from "../contexts/AuthContext";

export default function Authorizer() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <button
          style={{ fontSize: 30 }}
          className="btn-clear"
          onClick={toggleTheme}
        >
          {theme === "light" ? "🔦" : "💡"}
        </button>
      )}
    </ThemeConsumer>
  );
}

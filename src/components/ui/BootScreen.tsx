import { useEffect, useState } from "react";

const bootLines = [
  "Initializing neural core...",
  "Loading intelligence modules...",
  "Synchronizing user data...",
  "Analyzing environment...",
  "System online ✓",
];

function BootScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="boot-screen">
      <div className="boot-content">
        <h1>NEXUS AI</h1>

        <div className="boot-lines">
          {bootLines.map((line, index) => (
            <p key={index}>
              {">"} {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BootScreen;

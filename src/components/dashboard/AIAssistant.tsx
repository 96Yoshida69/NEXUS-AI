import GlassCard from "../ui/GlassCard";

const messages = [
  "Analyzing productivity patterns...",
  "Learning behavior detected...",
  "Optimization strategy generated.",
];

function AIAssistant() {
  return (
    <GlassCard>
      <div className="ai-assistant">
        <div className="assistant-header">
          <h2>NEXUS AI ASSISTANT</h2>

          <span>ONLINE</span>
        </div>

        <div className="assistant-chat">
          {messages.map((message, index) => (
            <p key={index}>
              <span>&gt;</span> {message}
            </p>
          ))}
        </div>

        <div className="assistant-actions">
          <button>PLAN DAY</button>

          <button>ANALYZE</button>

          <button>STRATEGY</button>
        </div>
      </div>
    </GlassCard>
  );
}

export default AIAssistant;

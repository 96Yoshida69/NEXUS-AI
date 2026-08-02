import GlassCard from "../ui/GlassCard";
import AIStatus from "../ui/AIStatus";

function AICore() {
  return (
    <GlassCard>
      <div className="ai-core">
        <AIStatus />

        <h2>NEXUS AI CORE</h2>

        <p>Analyzing productivity data...</p>

        <div className="progress">
          <div className="progress-fill"></div>
        </div>

        <strong>87%</strong>
      </div>
    </GlassCard>
  );
}

export default AICore;

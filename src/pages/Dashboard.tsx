import AIOrb from "../components/dashboard/AIOrb";
import AICore from "../components/dashboard/AICore";
import DashboardStats from "../components/dashboard/DashboardStats";
import NeuralTimeline from "../components/dashboard/NeuralTimeline";
import AIAssistant from "../components/dashboard/AIAssistant";
import NeuralMetrics from "../components/dashboard/NeuralMetrics";
import Animated from "../components/ui/Animated";

function Dashboard() {
  return (
    <div className="dashboard">
      <Animated delay={0.1}>
        <AIOrb />
      </Animated>

      <Animated delay={0.2}>
        <AICore />
      </Animated>

      <Animated delay={0.3}>
        <DashboardStats />
      </Animated>

      <Animated delay={0.4}>
        <NeuralTimeline />
      </Animated>

      <Animated delay={0.5}>
        <AIAssistant />
      </Animated>

      <Animated delay={0.6}>
        <NeuralMetrics />
      </Animated>
    </div>
  );
}

export default Dashboard;

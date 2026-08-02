import StatCard from "./StatCard";

function DashboardStats() {
  return (
    <div className="dashboard-stats">
      <StatCard title="Focus" value="87%" icon="🎯" />

      <StatCard title="Energy" value="92%" icon="⚡" />

      <StatCard title="Tasks" value="12" icon="🧠" />
    </div>
  );
}

export default DashboardStats;

import MetricCard from "./MetricCard";

function NeuralMetrics() {
  return (
    <div className="metrics">
      <MetricCard title="Intelligence" value={87} />

      <MetricCard title="Focus" value={92} />

      <MetricCard title="Stability" value={76} />

      <MetricCard title="Learning Rate" value={95} />
    </div>
  );
}

export default NeuralMetrics;

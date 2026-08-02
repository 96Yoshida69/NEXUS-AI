import GlassCard from "../ui/GlassCard";

interface Props {
  title: string;
  value: number;
}

function MetricCard({ title, value }: Props) {
  return (
    <GlassCard>
      <div className="metric">
        <div
          className="metric-circle"
          style={
            {
              "--progress": `${value}%`,
            } as React.CSSProperties
          }
        >
          <span>{value}%</span>
        </div>

        <h3>{title}</h3>
      </div>
    </GlassCard>
  );
}

export default MetricCard;

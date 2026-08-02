import GlassCard from "../ui/GlassCard";

interface Props {
  title: string;
  value: string;
  icon: string;
}

function StatCard({ title, value, icon }: Props) {
  return (
    <GlassCard>
      <div className="stat-card">
        <span className="stat-icon">{icon}</span>

        <div>
          <p>{title}</p>

          <h3>{value}</h3>
        </div>
      </div>
    </GlassCard>
  );
}

export default StatCard;

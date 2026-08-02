import GlassCard from "../ui/GlassCard";

const activities = [
  {
    time: "08:00",
    title: "Physical training completed",
    status: "SUCCESS",
  },
  {
    time: "10:30",
    title: "React learning session",
    status: "ACTIVE",
  },
  {
    time: "14:00",
    title: "NEXUS AI development",
    status: "PROCESSING",
  },
  {
    time: "18:00",
    title: "Daily optimization",
    status: "READY",
  },
];

function NeuralTimeline() {
  return (
    <GlassCard>
      <div className="timeline">
        <h2>Neural Timeline</h2>

        <div className="timeline-list">
          {activities.map((item) => (
            <div className="timeline-item" key={item.time}>
              <div className="timeline-time">{item.time}</div>

              <div className="timeline-line">
                <span></span>
              </div>

              <div className="timeline-content">
                <h3>{item.title}</h3>

                <p>{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

export default NeuralTimeline;

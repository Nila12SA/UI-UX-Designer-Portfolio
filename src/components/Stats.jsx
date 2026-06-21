import { Columns3 } from "lucide-react";
import laurelWreath from "../assets/laurel-wreath.png";

const stats = [
  {
    image: laurelWreath,
    value: "3+",
    label: "Projects",
  },
  {
    icon: Columns3,
    value: "Figma &",
    label: "UX Research",
  },
];

function Stats() {
  return (
    <div className="luxury-stats" aria-label="Portfolio highlights">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div className="luxury-stat" key={stat.label}>
            {stat.image ? (
              <img className="luxury-stat-image" src={stat.image} alt="" />
            ) : (
              <Icon aria-hidden="true" />
            )}
            <div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stats;

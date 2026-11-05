// Import des features depuis Data
import type { Feature } from "../data";

export default function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <article className="card h-100 bg-white border-0 rounded-4 shadow-sm">
      <div className="card-body p-4">
        <div className="icon-box mb-4">
          <Icon size={28} strokeWidth={2.2} />
        </div>
        <h3 className="h4 fw-bold mb-2">{feature.title}</h3>
        <p className="mb-0">{feature.text}</p>
      </div>
    </article>
  );
}

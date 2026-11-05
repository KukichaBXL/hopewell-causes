import type { Cause } from "../types";
import Badge from "./Badge";
import ProgressBar from "./ProgressBar";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function CauseCard({ cause }: { cause: Cause }) {
  return (
    <article className="card h-100 bg-white border-0 rounded-4 shadow-sm card-hover overflow-hidden">
      <div className="position-relative cause-media">
        <img
          src={cause.image}
          alt={cause.title}
          className="cause-img"
          loading="lazy"
        />
        <Badge variant="light" className="position-absolute top-0 start-0 m-2">
          {cause.category}
        </Badge>
      </div>

      <div className="card-body p-4">
        <h3 className="h5 fw-bold mb-2">{cause.title}</h3>
        <p className="small mb-3">{cause.description}</p>

        <div className="mb-2">
          <ProgressBar value={cause.raised} max={cause.goal} />
        </div>

        <div className="d-flex justify-content-between small mb-3">
          <strong className="text-success">{usd.format(cause.raised)} raised</strong>
          <span>of {usd.format(cause.goal)}</span>
        </div>

        <button type="button" className="btn btn-outline-success rounded-pill w-100 fw-semibold">
          Donate to this cause
        </button>
      </div>
    </article>
  );
}

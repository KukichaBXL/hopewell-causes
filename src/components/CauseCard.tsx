import type { Cause } from "../types";

export default function CauseCard({ cause }: { cause: Cause }) {
  // Calcul état / goal
  const percent = Math.min(100, (cause.raised / cause.goal) * 100);

  return (
    <article className="card cause-card h-100 bg-white border-0 shadow-sm">
      <div className="position-relative">
        <img src={cause.image} alt={cause.title} className="cause-img" />
        <span className="badge rounded-pill bg-white text-success-emphasis position-absolute top-0 start-0 m-2 px-3 py-2">
          {cause.category}
        </span>
      </div>

      <div className="card-body d-flex flex-column p-4">
        <h3 className="h5 fw-bold">{cause.title}</h3>
        <p className="small">{cause.description}</p>

        <div className="progress mb-2">
          <div className="progress-bar" style={{ width: `${percent}%` }}></div>
        </div>

        <div className="d-flex justify-content-between small mb-3">
          <strong className="text-success-emphasis">
            ${Intl.NumberFormat("en-US").format(cause.raised)} raised
          </strong>
          <span>of ${Intl.NumberFormat("en-US").format(cause.goal)}</span>
        </div>

        <button
          type="button"
          className="btn btn-outline-success rounded-pill fw-semibold w-100 mt-auto"
        >
          Donate to this cause
        </button>
      </div>
    </article>
  );
}

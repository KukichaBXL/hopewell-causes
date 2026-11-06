import { Heart } from "lucide-react";

export default function SectionTitle() {
  return (
    <header className="text-center mb-5">
      <span className="badge rounded-pill bg-success-subtle text-success-emphasis text-uppercase tracking-wide px-3 py-2 d-inline-flex align-items-center">
        <Heart size={12} fill="currentColor" className="me-2" />
        Active campaigns
      </span>
      <h2 className="display-5 fw-bold tracking-tight mt-3">
        Causes waiting for you
      </h2>
      <p className="text-secondary mx-auto" style={{ maxWidth: 520 }}>
        Every campaign below is independently verified and updated weekly with
        real disbursement records.
      </p>
    </header>
  );
}

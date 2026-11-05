import { Award } from "lucide-react";

export default function Features() {
  return (
    <section id="about" className="py-5 my-lg-5">
      <div className="container">
        <header className="text-center mb-5">
          <span className="badge rounded-pill bg-success-subtle text-success-emphasis text-uppercase tracking-wide font-title px-4 py-2 d-inline-flex align-items-center gap-2">
            <Award size={16} /> Why Hopewell
          </span>
          <h2 className="display-5 fw-bolder tracking-tight mt-3">
            Giving you can actually verify
          </h2>
        </header>
      </div>
    </section>
  );
}

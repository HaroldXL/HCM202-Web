import { Link, useLocation } from "react-router-dom";
import { Star, ClipboardCheck } from "lucide-react";

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <Star size={20} />
            </div>
            <span>HCM202</span>
          </Link>

          <nav>
            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/chapter/4-1"
                  className={
                    location.pathname.includes("/chapter") ? "active" : ""
                  }
                >
                  Khám phá
                </Link>
              </li>
              <li>
                <Link
                  to="/quiz"
                  className={location.pathname === "/quiz" ? "active" : ""}
                >
                  <ClipboardCheck size={16} />
                  Quiz
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

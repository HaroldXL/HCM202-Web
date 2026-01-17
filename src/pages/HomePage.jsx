import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Sparkles,
  ChevronDown,
  BookOpen,
  Shield,
  Users,
  Image,
  Star,
  Quote,
} from "lucide-react";
import { theoryData } from "../data/chapter-4-1";

export default function HomePage() {
  const [openSections, setOpenSections] = useState([0]);

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content fade-in-up">
              <div className="hero-badge">
                <Star size={14} />
                <span>Tư tưởng Hồ Chí Minh</span>
              </div>

              <h1 className="hero-title">
                Xây dựng Đảng
                <span className="text-gradient"> trong sạch, vững mạnh</span>
              </h1>

              <p className="hero-description">
                Tìm hiểu tư tưởng Hồ Chí Minh về tính tất yếu, vai trò lãnh đạo
                và các nguyên tắc xây dựng Đảng Cộng sản Việt Nam.
              </p>

              <div className="hero-actions">
                <Link to="/chapter/4-1" className="btn btn-primary btn-lg">
                  <Sparkles size={20} />
                  Khám phá ngay
                </Link>
                <button
                  onClick={() =>
                    document
                      .getElementById("theory-section")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn btn-outline-light btn-lg"
                >
                  <BookOpen size={20} />
                  Xem lý thuyết
                </button>
              </div>
            </div>

            {/* Right - Image Placeholder */}
            <div className="hero-image-wrapper fade-in-up delay-1">
              <div className="hero-image-placeholder">
                <Image size={48} />
                <span>Ảnh Bác Hồ</span>
                <small>800 x 600px</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-card fade-in-up">
            <Quote size={32} className="quote-icon" />
            <blockquote>"Đảng ta là đạo đức, là văn minh"</blockquote>
            <cite>— Chủ tịch Hồ Chí Minh</cite>
          </div>
        </div>
      </section>

      {/* Theory Overview Section */}
      <section id="theory-section" className="theory-section">
        <div className="container">
          <div className="section-header text-center fade-in-up">
            <span className="section-tag">Nội dung chính</span>
            <h2 className="section-title">Nền tảng Lý thuyết</h2>
            <p className="section-subtitle">
              Tìm hiểu các nội dung cơ bản về tư tưởng Hồ Chí Minh trong xây
              dựng Đảng
            </p>
          </div>

          {/* Feature Cards */}
          <div className="feature-cards">
            <div className="feature-card fade-in-up delay-1">
              <div className="feature-icon red">
                <BookOpen size={28} />
              </div>
              <h3>Tính tất yếu của Đảng</h3>
              <p>Sự ra đời của Đảng là kết quả tất yếu của lịch sử dân tộc</p>
            </div>

            <div className="feature-card fade-in-up delay-2">
              <div className="feature-icon yellow">
                <Shield size={28} />
              </div>
              <h3>Đảng trong sạch, vững mạnh</h3>
              <p>Điều kiện tiên quyết để giữ vững quyền lãnh đạo</p>
            </div>

            <div className="feature-card fade-in-up delay-3">
              <div className="feature-icon blue">
                <Users size={28} />
              </div>
              <h3>8 Nguyên tắc tổ chức</h3>
              <p>Nền tảng cho hoạt động và phát triển của Đảng</p>
            </div>
          </div>

          {/* Detailed Theory Accordion */}
          <div className="theory-accordion fade-in-up">
            {theoryData.map((section, index) => (
              <div
                key={index}
                className={`theory-item ${openSections.includes(index) ? "open" : ""}`}
              >
                <button
                  className="theory-header"
                  onClick={() => toggleSection(index)}
                >
                  <div className="theory-header-content">
                    <span className="theory-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="theory-title">{section.title}</span>
                  </div>
                  <ChevronDown size={20} className="theory-chevron" />
                </button>

                {openSections.includes(index) && (
                  <div className="theory-body">
                    <div className="theory-content-grid">
                      {/* Content */}
                      <div className="theory-text-content">
                        <ul className="theory-points">
                          {section.points.map((point, pIndex) => (
                            <li key={pIndex} className="fade-in">
                              <span className="point-bullet"></span>
                              {point}
                            </li>
                          ))}
                        </ul>

                        {section.quote && (
                          <div className="theory-quote">
                            <p>"{section.quote.text}"</p>
                            <cite>— {section.quote.author}</cite>
                          </div>
                        )}
                      </div>

                      {/* Image Placeholder */}
                      <div className="theory-image-placeholder">
                        <Image size={32} />
                        <span>Ảnh minh họa</span>
                        <small>400 x 300px</small>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

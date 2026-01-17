import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Sparkles,
  BookOpen,
  Shield,
  Users,
  Image,
  Star,
  ChevronDown,
} from "lucide-react";
import { theoryData } from "../data/chapter-4-1";

export default function HomePage() {
  const [openSections, setOpenSections] = useState([]); // All closed by default

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
                Đảng cầm quyền có thể mất lòng tin của nhân dân –
                <span className="text-gradient">
                  {" "}
                  làm sao để tránh nguy cơ này?
                </span>
              </h1>

              <p className="hero-description">
                Khám phá các nguy cơ khiến Đảng mất uy tín và những giải pháp
                xây dựng Đảng trong sạch, vững mạnh theo tư tưởng Hồ Chí Minh.
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
                <img
                  src="/images/banner.png"
                  alt="Lòng tin của nhân dân và vai trò lãnh đạo của Đảng"
                  className="hero-banner-img"
                />
              </div>
            </div>
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
              <h3>Nguyên tắc tổ chức</h3>
              <p>Nền tảng cho hoạt động và phát triển của Đảng</p>
            </div>
          </div>

          {/* Detailed Theory Sections - Each with unique layout */}
          <div className="theory-sections">
            {theoryData.map((section, index) => {
              const hasPrinciples = !!section.principles;
              const isOpen = openSections.includes(index);

              return (
                <div
                  key={index}
                  className={`theory-section-item fade-in-up delay-${index + 1} ${isOpen ? "open" : ""}`}
                >
                  <div className="theory-section-container">
                    {/* Section Header - Clickable */}
                    <button
                      className="theory-section-header"
                      onClick={() => toggleSection(index)}
                    >
                      <span className="theory-section-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="theory-header-text">
                        <h3 className="theory-section-title">
                          {section.title}
                        </h3>
                        {section.subtitle && (
                          <p className="theory-section-subtitle">
                            {section.subtitle}
                          </p>
                        )}
                      </div>
                      <ChevronDown size={24} className="theory-toggle-icon" />
                    </button>

                    {/* Collapsible Content */}
                    {isOpen && (
                      <>
                        {/* Section Image Banner */}
                        <div className="theory-section-image-banner">
                          <img
                            src={`/images/section${index + 1}.png`}
                            alt={`Minh họa ${section.title}`}
                            className="section-banner-img"
                          />
                        </div>

                        {hasPrinciples ? (
                          // Full width layout for principles section
                          <div className="theory-section-full">
                            <div className="principles-grid">
                              {section.principles.map((principle, pIndex) => (
                                <div key={pIndex} className="principle-card">
                                  <div className="principle-number">
                                    {pIndex + 1}
                                  </div>
                                  <div
                                    className="principle-text"
                                    dangerouslySetInnerHTML={{
                                      __html: principle,
                                    }}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          // Layout for sections with subsections
                          <div className="theory-section-full">
                            <div
                              className={`theory-subsections-wrapper ${
                                section.sections?.length === 3
                                  ? "three-columns"
                                  : section.sections?.length === 2
                                    ? "two-columns"
                                    : ""
                              }`}
                            >
                              {section.sections &&
                                section.sections.map((subsection, sIndex) => (
                                  <div
                                    key={sIndex}
                                    className="theory-subsection"
                                  >
                                    <h4 className="subsection-heading">
                                      {subsection.heading}
                                    </h4>
                                    {subsection.content && (
                                      <p className="subsection-content">
                                        {subsection.content}
                                      </p>
                                    )}
                                    {subsection.points && (
                                      <ul className="theory-section-points">
                                        {subsection.points.map(
                                          (point, pIndex) => (
                                            <li key={pIndex}>
                                              <span className="point-icon"></span>
                                              <span
                                                dangerouslySetInnerHTML={{
                                                  __html: point,
                                                }}
                                              ></span>
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    )}
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

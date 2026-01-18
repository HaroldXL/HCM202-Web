import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Image,
  Quote,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  FileX,
  DollarSign,
  X,
} from "lucide-react";
import { kientaoData } from "../data/chapter-4-1";

export default function ChapterPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="chapter-page">
      {/* Hero Banner */}
      <div className="chapter-hero">
        <div className="chapter-hero-bg"></div>
        <div className="container">
          <Link to="/" className="back-link fade-in">
            <ArrowLeft size={20} />
            <span>Quay lại trang chủ</span>
          </Link>

          <div className="chapter-hero-content fade-in-up">
            <span className="chapter-tag">Phân tích chuyên sâu</span>
            <h1
              className="chapter-main-title"
              dangerouslySetInnerHTML={{ __html: kientaoData.question }}
            ></h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="chapter-content">
        <div className="container">
          <div className="content-layout">
            {/* Left - Main Content */}
            <div className="main-content">
              {/* Section 1: Nguy cơ */}
              <section className="content-section fade-in-up">
                <div className="section-icon danger">
                  <AlertTriangle size={24} />
                </div>
                <h2 className="content-section-title">
                  {kientaoData.sections[0].title}
                </h2>

                <div className="content-cards">
                  {kientaoData.sections[0].points.map((point, index) => (
                    <div key={index} className="content-card danger-card">
                      <div
                        className="card-content"
                        dangerouslySetInnerHTML={{ __html: point }}
                      />
                    </div>
                  ))}
                </div>

                {/* Button to show examples */}
                <button
                  className="show-examples-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Lightbulb size={20} />
                  Xem ví dụ thực tế
                </button>

                {/* Image Placeholder */}
                <div className="content-image-placeholder">
                  <img
                    src="/images/chapter1.png"
                    alt="Minh họa về các nguy cơ làm hỏng Đảng"
                    className="content-banner-img"
                  />
                </div>
              </section>

              {/* Section 2: Giải pháp */}
              <section className="content-section fade-in-up delay-1">
                <div className="section-icon success">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="content-section-title">
                  {kientaoData.sections[1].title}
                </h2>

                <div className="solution-list">
                  {kientaoData.sections[1].points.map((point, index) => (
                    <div key={index} className="solution-item">
                      <div className="solution-number">{index + 1}</div>
                      <div
                        className="solution-content"
                        dangerouslySetInnerHTML={{ __html: point }}
                      />
                    </div>
                  ))}
                </div>

                {/* Image Placeholder */}
                <div className="content-image-placeholder">
                  <img
                    src="/images/chapter2.png"
                    alt="Minh họa về giải pháp xây dựng Đảng"
                    className="content-banner-img"
                  />
                </div>
              </section>

              {/* Conclusion Quote */}
              <section className="conclusion-section fade-in-up delay-2">
                <div className="conclusion-card">
                  <Quote size={40} className="conclusion-quote-icon" />
                  <p className="conclusion-text">{kientaoData.conclusion}</p>
                  <div className="conclusion-decoration"></div>
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <aside className="content-sidebar">
              <div className="sidebar-sticky">
                {/* Key Insight Card */}
                <div className="sidebar-card insight-card fade-in-up">
                  <div className="sidebar-card-header">
                    <Lightbulb size={20} />
                    <span>Điểm mấu chốt</span>
                  </div>
                  <ul className="insight-list">
                    <li>Tham nhũng, quan liêu là "giặc nội xâm"</li>
                    <li>Đức phải là gốc của người cán bộ</li>
                    <li>Dựa vào dân để xây dựng Đảng</li>
                    <li>Thường xuyên tự chỉnh đốn</li>
                  </ul>
                </div>

                {/* Quiz Call-to-Action Card */}
                <Link
                  to="/quiz"
                  className="sidebar-card quiz-cta-card fade-in-up delay-1"
                >
                  <div className="quiz-cta-icon">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="quiz-cta-title">Kiểm tra kiến thức</h3>
                  <p className="quiz-cta-description">
                    Làm bài quiz để củng cố những kiến thức đã biết
                  </p>
                  <div className="quiz-cta-button">
                    Làm Quiz ngay
                    <ArrowLeft
                      size={16}
                      style={{ transform: "rotate(180deg)" }}
                    />
                  </div>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Modal for Examples */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="modal-body">
              <div className="examples-grid">
                {kientaoData.examples.map((example, index) => {
                  const IconComponent =
                    example.icon === "FileX" ? FileX : DollarSign;
                  return (
                    <div
                      key={index}
                      className={`example-card ${example.color}`}
                    >
                      <div className="example-header">
                        <div className="example-icon-wrapper">
                          <IconComponent size={24} />
                        </div>
                        <h3 className="example-title">{example.title}</h3>
                      </div>

                      <div className="example-content">
                        <div className="example-situation">
                          <h4>{example.situation.title}</h4>
                          <ul>
                            {example.situation.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="example-consequence">
                          <h4>{example.consequence.title}</h4>
                          <p>{example.consequence.description}</p>
                        </div>

                        <div className="example-quote">
                          <Quote size={20} />
                          <p>{example.quote}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

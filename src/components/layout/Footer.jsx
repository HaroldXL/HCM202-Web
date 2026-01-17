export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2025 HCM202 - Bản quyền thuộc về PromptEngineer</p>{" "}
        <p className="footer-credit">
          Tất cả hình ảnh được tạo bởi
          <img
            src="/images/gemini-logo.png"
            alt="Gemini AI"
            className="gemini-logo"
          />
          <span className="highlight-text">Nano Banana Pro - Gemini AI</span>
        </p>{" "}
      </div>
    </footer>
  );
}

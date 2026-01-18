export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2025 HCM202 - Bản quyền thuộc về PromptEngineer</p>{" "}
        <p className="footer-notebooklm">
          Nội dung được hỗ trợ bởi{" "}
          <img
            src="/images/notebooklm-scaled.webp"
            alt="NotebookLM"
            className="notebooklm-logo"
          />
          <span className="highlight-text">NotebookLM</span>
        </p>
        <p className="footer-credit">
          Tất cả hình ảnh được tạo bởi
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

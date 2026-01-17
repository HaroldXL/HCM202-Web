import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  RotateCcw,
  BookOpen,
  Trophy,
  Target,
} from "lucide-react";
import { quizData } from "../data/chapter-4-1";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswerSelect = (index) => {
    if (answered) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;

    setAnswered(true);
    if (selectedAnswer === quizData[currentQuestion].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(false);
  };

  if (showResult) {
    const percentage = Math.round((score / quizData.length) * 100);
    const isGood = percentage >= 70;

    return (
      <div className="quiz-page">
        <div className="quiz-page-header">
          <div className="container">
            <Link to="/" className="back-btn">
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </Link>
          </div>
        </div>

        <div className="container">
          <div className="quiz-result-page fade-in-up">
            <div
              className={`result-icon-large ${isGood ? "success" : "warning"}`}
            >
              {isGood ? <Trophy size={48} /> : <Target size={48} />}
            </div>
            <h1 className="result-title">
              {isGood ? "Xuất sắc!" : "Cần ôn tập thêm!"}
            </h1>
            <div className="result-score-large">
              {score}/{quizData.length}
            </div>
            <p className="result-percentage">{percentage}% chính xác</p>
            <p className="result-message">
              {isGood
                ? "Bạn đã nắm vững kiến thức về tư tưởng Hồ Chí Minh!"
                : "Hãy xem lại phần lý thuyết để củng cố kiến thức nhé!"}
            </p>

            <div className="result-actions">
              <button
                className="btn btn-primary btn-lg"
                onClick={handleRestartQuiz}
              >
                <RotateCcw size={20} />
                Làm lại Quiz
              </button>
              <Link to="/" className="btn btn-secondary btn-lg">
                <BookOpen size={20} />
                Xem lý thuyết
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="quiz-page">
      {/* Header */}
      <div className="quiz-page-header">
        <div className="container">
          <div className="quiz-header-content">
            <Link to="/" className="back-btn">
              <ArrowLeft size={20} />
              <span>Quay lại</span>
            </Link>
            <div className="quiz-progress-info">
              <span className="quiz-progress-text">
                Câu {currentQuestion + 1} / {quizData.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="quiz-progress-bar-container">
        <div
          className="quiz-progress-bar-fill"
          style={{
            width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="quiz-main fade-in-up">
          <div className="quiz-question-number">
            Câu hỏi {currentQuestion + 1}
          </div>
          <h2 className="quiz-question-text">{question.question}</h2>

          <div className="quiz-options-list">
            {question.options.map((option, index) => {
              let className = "quiz-option-item";

              if (answered) {
                className += " disabled";
                if (index === question.correct) {
                  className += " correct";
                } else if (
                  index === selectedAnswer &&
                  index !== question.correct
                ) {
                  className += " incorrect";
                }
              } else if (index === selectedAnswer) {
                className += " selected";
              }

              return (
                <div
                  key={index}
                  className={className}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span className="option-marker">
                    {answered && index === question.correct ? (
                      <CheckCircle size={20} />
                    ) : answered &&
                      index === selectedAnswer &&
                      index !== question.correct ? (
                      <XCircle size={20} />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </span>
                  <span className="option-content">{option}</span>
                </div>
              );
            })}
          </div>

          {answered && (
            <div
              className={`quiz-explanation fade-in ${
                selectedAnswer === question.correct ? "correct" : "incorrect"
              }`}
            >
              <div className="explanation-header">
                {selectedAnswer === question.correct
                  ? "✓ Chính xác!"
                  : `✗ Đáp án đúng: ${String.fromCharCode(65 + question.correct)}`}
              </div>
              {question.explanation && (
                <p className="explanation-text">{question.explanation}</p>
              )}
            </div>
          )}

          <div className="quiz-action-bar">
            {!answered ? (
              <button
                className="btn btn-primary btn-lg"
                onClick={handleCheckAnswer}
                disabled={selectedAnswer === null}
              >
                Kiểm tra đáp án
              </button>
            ) : (
              <button
                className="btn btn-primary btn-lg"
                onClick={handleNextQuestion}
              >
                {currentQuestion < quizData.length - 1
                  ? "Câu tiếp theo →"
                  : "Xem kết quả"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

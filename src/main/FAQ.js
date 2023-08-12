import React, { useState } from "react";

function FAQ() {
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (expandedQuestions.includes(index)) {
      setExpandedQuestions(expandedQuestions.filter(q => q !== index));
    } else {
      setExpandedQuestions([...expandedQuestions, index]);
    }
  };

  const faqData = [
    {
      question: "Q. 질문이 뭔가요 ?",
      answer: "질문 1의 대답입니다."
    },
    {
      question: "Q. 질문이 뭔가요 ?",
      answer: "질문 2의 대답입니다."
    },
    // Add more FAQ data
  ];

  return (
    <div className="faq-page">
      <div>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
            </div>
            {expandedQuestions.includes(index) && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

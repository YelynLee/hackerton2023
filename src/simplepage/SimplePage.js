import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import smile from './smile.svg';
import './SimplePage.css';

const faqData = [
  {
    question: '서비스명은 무엇인가요?',
    answer: '공공서비스1은 사용자들에게 다양한 정보를 제공하는 서비스입니다.',
  },
  {
    question: '서비스를 이용하는 방법은 어떻게 되나요?',
    answer: '서비스를 이용하려면 홈페이지에 접속하여 회원 가입 후 로그인하세요.',
  },
];

function SimplePage() {
  // 카테고리 
  const categories = ['초간단질문', '플러스질문', '수행미션'];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  // 버튼들 보이게 하려고 
  const isSimpleQuestionCategory = selectedCategory === '초간단질문';
  // 아코디언 
  const [accordion, setActiveAccordion] = useState(-1);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };



  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
    } else {
      setActiveAccordion(index);
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="simple-page">
      <header className="simplepage-header">
        <img src={smile} alt="로고" className="logo" />
        <div className="category-menu">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </header>
      <main className="content">
        {isSimpleQuestionCategory && (
          <div className="faq-section">
            <h2>서비스 명</h2>
            <p>공공서비스1</p>

            <h2>서비스 소개 및 간단한 설명</h2>
            <p>공공서비스1은 사용자들에게 다양한 정보를 제공하는 서비스입니다.</p>

            <h2>자주 묻는 질문</h2>
            <div className="accordion_faq">
              {faqData.map((faq, index) => (
                <div key={index} onClick={() => toggleAccordion(index)}>
                  <div className="accordion-header">
                    <h3 className={accordion === index ? 'active' : ''}>{faq.question}</h3>
                  </div>
                  <div className={`accordion-content ${accordion === index ? 'active' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      {isSimpleQuestionCategory && (
        <div className="page-buttons">
          <button className="back-button " onClick={goBack} >뒤로가기</button>
          <button className="ask-button">질문하기</button>
        </div>
      )}
    </div>
  );
}

export default SimplePage;

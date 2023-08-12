import React, { useState } from "react";
import './Main.css'; 
import FAQ from "./FAQ";

function Main() {
  const [activeSection, setActiveSection] = useState("serviceIntro");

  const sectionContents = {
    serviceIntro: "서비스 소개 내용이 들어갈 부분입니다.",
    usageGuide: "서비스 이용 방법 내용이 들어갈 부분입니다.",
  };

  return (
    <div className="mainpage">
      <div className="title">메인 페이지</div>

      <div className="category-container">
        <div
          className={`category ${activeSection === "serviceIntro" ? "active" : ""}`}
          onClick={() => setActiveSection("serviceIntro")}
        >
          서비스 이름
        </div>
        <div
          className={`category ${activeSection === "usageGuide" ? "active" : ""}`}
          onClick={() => setActiveSection("usageGuide")}
        >
          서비스 이용 방법
        </div>
        <div
          className={`category ${activeSection === "faq" ? "active" : ""}`}
          onClick={() => setActiveSection("faq")}
        >
          자주 묻는 질문
        </div>
      </div>
 
      <div className="section-content"> 
        {activeSection === "faq" ? (
          <FAQ />
        ) : (
          <div className="content">{sectionContents[activeSection]}</div>
        )}
      </div>
    </div>
  );
}

export default Main;

import React from "react";
// eslint-disable-next-line 
import { Navigate, useNavigate } from "react-router-dom";
// eslint-disable-next-line 
import styles from "./sign.css";
import { useEffect, useState } from "react";


  

function Sign() {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pw2, setPw2] = useState('');
  // eslint-disable-next-line 
    const [nameValid, setNameValid] = useState(false);
    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pw2Valid, setPw2Valid] = useState(false);
    // eslint-disable-next-line 
    const [notAllow, setNotAllow] = useState(true);
    const [sign,setSign] = useState(true);

    useEffect(() => {
        if(pw2Valid) {
          setSign(false);
          return;
        }
        setSign(true);
      }, [pw2Valid]);
    

    useEffect(() => {
      if(idValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [idValid, pwValid]);

    const handlename = (e) => {
        setName(e.target.value);
        const regex =
        /^[a-z]+[a-z0-9]{2,19}$/g;
        if (regex.test(e.target.value)) {
          setNameValid(true);
        } else {
          setNameValid(false);
        }
      };

    const handleid = (e) => {
        setId(e.target.value);
        const regex =
          /^(?=.*[a-zA-z])(?=.*[0-9])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{5,20}$/;
        if (regex.test(e.target.value)) {
          setIdValid(true);
        } else {
          setIdValid(false);
        }
    };

    const handlePw = (e) => {
        setPw(e.target.value);
        const regex =
          /^(?=.*[a-zA-z])(?=.*[0-9])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{5,20}$/;
        if (regex.test(e.target.value)) {
          setPwValid(true);
        } else {
          setPwValid(false);
        }
      };

    const handlePw2 = (e) => {
      setPw2(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{5,20}$/;
      if (regex.test(e.target.value)) {
        setPw2Valid(true);
      } else {
        setPw2Valid(false);
      }
    };
    const onClickConfirmButton = () => {
        document.getElementsByClassName("bottomButtons").className = "goButton";
        alert('회원 가입에 성공했습니다.');
        
    
    }

    return (
      <div className="page">
        <div className="titleWrap">
          회원가입
        </div>

        <div className="contentWrap">
          <div className="inputTitle">닉네임</div>
          <div
            className="inputWrap"
          >
            <input
              className="input"
              type="text"
              placeholder="닉네임을 입력하세요"
              value={name}
              onChange={handlename}
            />
          </div>
          <div className="errorMessageWrap">
            {!idValid && id.length > 0 && (
              <div>3자 이상의 닉네임을 입력해주세요.</div>
            )}
          </div>

          <div  className="inputTitle">
            아이디
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              placeholder="영문, 숫자 포함 5자 이상"
              value={id}
              onChange={handleid}
            />
          </div>
          <div className="errorMessageWrap">
            {!idValid && id.length > 0 && (
              <div>영문, 숫자 포함 5자 이상 입력해주세요.</div>
            )}
          </div>

          <div  className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자 포함 5자 이상"
              value={pw}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && pw.length > 0 && (
              <div>영문, 숫자 포함 5자 이상 입력해주세요.</div>
            )}
          </div>

          <div  className="inputTitle">
            비밀번호 재확인
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자 포함 5자 이상"
              value={pw2}
              onChange={handlePw2}
            />
          </div>
          <div className="errorMessageWrap">
            {!pw2Valid && handlePw !== handlePw2 && (
              <div>비밀번호가 일치하지 않습니다.</div>
            )}
          </div>
        </div>

        <div>
          <button onClick={onClickConfirmButton} disabled={sign} className="bottomButton">
            회원 가입
          </button>
          
        </div>
        <div>
        <button className="HomeBtn">홈으로</button>
        </div>
      </div>
    );
   
}

export default Sign;
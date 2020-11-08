import React, { useState } from "react";
import styles from "pages/contact/index.module.sass";
import classnames from "classnames/bind";
import { useSelector } from "react-redux";
import validator from "validator";
import PageContainer from "components/page-container";
import useResize from "utils/useResize";
import emailjs from "emailjs-com";
import Arrow from "components/arrow";

const Contact = () => {
  const cx = classnames.bind(styles);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [elseContact, setElseContact] = useState("");
  const [textareaWidth, setTextareaWidth] = useState();
  const state = useSelector((state) => state.appReducer);

  const [caseType, setCaseType] = useState("brand-domain-design");
  const [comment, setComment] = useState("");
  const [nameInputError, setNameInputError] = useState(false);
  const [emailInputError, setEmailInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const textareaWidthCalc = () => {
    if (window.innerWidth < 768) {
      setTextareaWidth(window.innerWidth - 50);
    } else {
      setTextareaWidth(window.innerWidth - 160);
    }
  };

  useResize(textareaWidthCalc);

  const caseData = [
    {
      key: "brand-domain-design",
      value: "Brand Domain Design 品牌空間設計",
    },
    {
      key: "interior-design",
      value: "Interior Design 空間規劃設計",
    },
    {
      key: "idendity-design",
      value: "Idendity Design 品牌識別設計",
    },
    {
      key: "consulting-cooperation",
      value: "Consulting and Cooperation 顧問諮詢與合作",
    },
  ];

  const sendMail = (e) => {
    const preCheck = () => {
      const emailCheck = validator.isEmail(email);
      const nameCheck = name.length !== 0;

      const pass = emailCheck && nameCheck;
      if (!pass) {
        setSuccessMessage("");
        setNameInputError(!nameCheck);
        setEmailInputError(!emailCheck);
        setErrorMessage("請填入姓名和正確的信箱，幫助我們能夠正確的與您做聯繫");
      }
      return pass;
    };

    if (!preCheck()) return;
    setErrorMessage("");
    e.preventDefault();
    let params = {
      name,
      company,
      email,
      phone,
      elseContact,
      caseType: caseData.find((x) => x.key === caseType).value,
      comment,
    };

    let serviceId = "unme";
    let templateId = "template_408xf4h";
    let userID = "user_4mY5wOOGGrgwMptW1b5zE";
    emailjs
      .send(serviceId, templateId, params, userID)
      .then((response) => {
        setSuccessMessage(
          "我們已收到您的需求，請耐心等候，我們將儘速與您聯繫！"
        );
      })
      .catch((error) => {
        console.log(error);
        setSuccessMessage("");
        setErrorMessage("發送需求時遇到錯誤，請重新發送，謝謝");
      });
  };

  const nameInputClass = cx({
    name: true,
    error: nameInputError,
  });

  const emailInputClass = cx({
    email: true,
    error: emailInputError,
  });

  const errorMessageClass = cx({
    "error-message": true,
    show: errorMessage,
  });

  const successMessageClass = cx({
    "success-message": true,
    show: successMessage,
  });

  return (
    <PageContainer>
      <div className={styles.contact}>
        <div className={styles.desc}>
          非我設計運用斜槓與創新的技能，將一切內部作業線上化，
          省下的空間經營成本，讓夥伴吃得更胖，合作CP值變高！
          <br />
          要找我們開會？去你那喝杯咖啡吧！或是找家咖啡廳吧！
        </div>
        <form className={styles.form}>
          <fieldset>
            <label htmlFor="name">稱呼</label>
            <input
              className={nameInputClass}
              id="name"
              type="text"
              value={name}
              placeholder="個人稱呼"
              onChange={(e) => {
                setNameInputError(false);
                setName(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="company">公司</label>
            <input
              id="company"
              type="text"
              value={company}
              placeholder="公司名稱"
              onChange={(e) => setCompany(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">電話</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              placeholder="聯絡電話"
              onChange={(e) => setPhone(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">信箱</label>
            <input
              className={emailInputClass}
              id="email"
              type="email"
              inputMode="email"
              value={email}
              placeholder="聯絡信箱"
              onChange={(e) => {
                setEmailInputError(false);
                setEmail(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="else">其他聯絡方式</label>
            <input
              id="else"
              type="text"
              value={elseContact}
              placeholder="ex. LINE: unme"
              onChange={(e) => setElseContact(e.target.value)}
            />
          </fieldset>
          <fieldset className={styles.select}>
            <label htmlFor="caseType">案件類型</label>
            <select id="caseType" onChange={(e) => setCaseType(e.target.value)}>
              {caseData.map((data) => {
                return (
                  <option key={data.key} value={data.key}>
                    {data.value}
                  </option>
                );
              })}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="comment">關於我們即將來臨的合作...</label>
            <textarea
              style={{
                width: textareaWidth,
                maxWidth: textareaWidth,
                minWidth: textareaWidth,
              }}
              id="comment"
              rows="5"
              width="360"
              placeholder="請描述關於本次合作的內容，例如地點、預計開幕日期、喜歡的風格類型等，或是其他想分享給我們的任何事情，UnMe動物園的成員們都很願意與您做討論和配合，並會盡快與您做聯繫！"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </fieldset>
          <div className={styles.bottom}>
            <span className={errorMessageClass}>{errorMessage}</span>
            <span className={successMessageClass}>{successMessage}</span>
            <Arrow
              dark={state.darkMode}
              hover={true}
              text="Send"
              onClick={sendMail}
            />
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default Contact;

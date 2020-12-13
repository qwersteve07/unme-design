import React, { useState } from "react";
import styles from "pages/contact/index.module.sass";
import classnames from "classnames/bind";
import validator from "validator";
import PageContainer from "components/page-container";
import emailjs from "emailjs-com";
import ArrowText from "components/arrowText";

const Contact = () => {
  const cx = classnames.bind(styles);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [elseContact, setElseContact] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [caseType, setCaseType] = useState("domain-design");
  const [comment, setComment] = useState("");
  const [nameInputError, setNameInputError] = useState(false);
  const [emailInputError, setEmailInputError] = useState(false);
  const [companyInputError, setCompanyInputError] = useState(false);
  const [phoneInputError, setPhoneInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const caseData = [
    {
      name: "維度專案 Domain Projects",
      data: [
        {
          key: "domain-design",
          value: "Domain Design｜維度設計合作",
        },
        {
          key: "consulting-and-cooperation",
          value: "Consulting and Cooperation｜顧問諮詢與合作",
        },
        {
          key: "Social-enterprise-projects",
          value: "Social Enterprise Projects｜社會企業專案申請",
        },
      ],
    },
    {
      name: "設計專案 Design Projects",
      data: [
        {
          key: "web-design",
          value: "Web Design｜品牌網站設計",
        },
        {
          key: "idendity-design",
          value: "Idendity Design｜品牌識別設計",
        },
        {
          key: "space-branding-design",
          value: "Space Branding Design｜品牌空間設計",
        },
      ],
    },
  ];

  const sendMail = (e) => {
    const preCheck = () => {
      const emailCheck = validator.isEmail(email);
      const nameCheck = name.length !== 0;
      const companyCheck = company.length !== 0;
      const phoneCheck = phone.length !== 0;

      const pass = emailCheck && nameCheck && companyCheck && phoneCheck;
      if (!pass) {
        setSuccessMessage("");
        setNameInputError(!nameCheck);
        setEmailInputError(!emailCheck);
        setCompanyInputError(!companyCheck);
        setPhoneInputError(!phoneCheck);
        setErrorMessage("請填入必要資訊，幫助我們能夠正確的與您做聯繫");
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
      caseType: caseData
        .map((data) => data.data)
        .flat()
        .find((x) => x.key === caseType).value,
      comment,
      startDate,
      endDate,
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

  const companyInputClass = cx({
    company: true,
    error: companyInputError,
  });

  const phoneInputClass = cx({
    name: true,
    error: phoneInputError,
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
      <main className={styles.contact}>
        <h1>UnMe Design｜Dots makes brand happen</h1>
        <p className={styles.desc}>
          聯繫非我設計的維度動物們，運用設計堆疊出品牌的獨特樣貌！
        </p>
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
              className={companyInputClass}
              id="company"
              type="text"
              value={company}
              placeholder="公司名稱"
              onChange={(e) => {
                setCompanyInputError(false);
                setCompany(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">電話</label>
            <input
              className={phoneInputClass}
              id="phone"
              type="tel"
              value={phone}
              placeholder="聯絡電話"
              onChange={(e) => {
                setPhoneInputError(false);
                setPhone(e.target.value);
              }}
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
              placeholder="Line id、FB"
              onChange={(e) => setElseContact(e.target.value)}
            />
          </fieldset>
          <fieldset className={styles.select}>
            <label htmlFor="caseType">案件類型</label>
            <select id="caseType" onChange={(e) => setCaseType(e.target.value)}>
              {caseData.map((groupData) => {
                return (
                  <optgroup label={groupData.name} key={groupData.name}>
                    {groupData.data.map((data) => {
                      return (
                        <option key={data.key} value={data.key}>
                          {data.value}
                        </option>
                      );
                    })}
                  </optgroup>
                );
              })}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="start_date">預計開案日期</label>
            <input
              id="start_date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="end_date">預計完成日期</label>
            <input
              id="end_date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="comment">關於我們即將來臨的合作...</label>
            <textarea
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
            <ArrowText text="Send" onClick={sendMail} />
          </div>
        </form>
      </main>
    </PageContainer>
  );
};

export default Contact;

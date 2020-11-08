import React, { useState } from "react";
import styles from "pages/contact/index.module.sass";
import PageContainer from "components/page-container";
import emailjs from "emailjs-com";
import Arrow from "components/arrow";

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [caseType, setCaseType] = useState("brand-domain-design");
  const [comment, setComment] = useState("");

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
    e.preventDefault();
    let params = {
      name,
      company,
      email,
      phone,
      caseType: caseData.find((x) => x.key === caseType).value,
      comment,
    };

    let serviceId = "unme";
    let templateId = "template_408xf4h";
    let userID = "user_4mY5wOOGGrgwMptW1b5zE";
    emailjs
      .send(serviceId, templateId, params, userID)
      .then((response) => {
        console.log(response);
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        console.log(error);
        console.log("FAILED...", error);
      });
  };
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
              id="name"
              type="text"
              value={name}
              placeholder="請輸入稱呼名字"
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="company">公司名稱</label>
            <input
              id="company"
              type="text"
              value={company}
              placeholder="請輸入公司名稱"
              onChange={(e) => setCompany(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">信箱</label>
            <input
              id="email"
              type="email"
              inputMode="email"
              value={email}
              placeholder="請輸入信箱"
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">電話</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              placeholder="請輸入聯絡電話"
              onChange={(e) => setPhone(e.target.value)}
            />
          </fieldset>
          <fieldset className={styles.select}>
            <label htmlFor="caseType">案件類型</label>
            <select id="caseType" onChange={(e) => setCaseType(e.target.value)}>
              {caseData.map((data) => {
                return <option value={data.key}>{data.value}</option>;
              })}
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="comment">備註</label>
            <textarea
              id="comment"
              rows="5"
              width="360"
              placeholder="歡迎分享更多關於你的事情，讓我們更理解你一點，UnMe動物園將於兩個工作日內，由比較清幽的動物回覆訊息"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </fieldset>
          <Arrow hover={true} />
        </form>
      </div>
    </PageContainer>
  );
};

export default Contact;

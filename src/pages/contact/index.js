import dynamic from "next/dynamic";
import React from "react";
import styles from "pages/about/index.module.sass";
import PageContainer from "components/page-container";
import Tags from "components/tags";
import wolf from "images/wolf.jpg";
import elephant from "images/elephant.jpg";
import dog from "images/dog.jpg";
import jellyfish from "images/jellyfish.jpg";
import project01 from "images/project01.jpg";
import project02 from "images/project02.jpg";

const Carousel = dynamic(() => import("components/carousel"), { ssr: false });

const Contact = ({ memberData, projectsData }) => {
  return (
    <PageContainer>
      <div className={styles.contact}>
        <div classNaem={styles.desc}>
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
              value=""
              placeholder="請輸入稱呼名字"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="company">公司名稱</label>
            <input
              id="company"
              type="text"
              value=""
              placeholder="請輸入公司名稱"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email">信箱</label>
            <input
              id="email"
              type="email"
              inputMode="email"
              value=""
              placeholder="請輸入信箱"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">電話</label>
            <input
              id="phone"
              type="tel"
              value=""
              placeholder="請輸入聯絡電話"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="case">案件類型</label>
            <select id="case">
              <option value="brand-design">
                Brand Domain Design 品牌空間設計
              </option>
              <option value="interior-design">
                Interior Design 空間規劃設計
              </option>
              <option value="idendity-design">
                Idendity Design 品牌識別設計
              </option>
              <option value="consulting-cooperation">
                Consulting and Cooperation 顧問諮詢與合作
              </option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="case">備註</label>
            <textarea placeholder="歡迎分享更多關於你的事情，讓我們更理解你一點，UnMe動物園將於兩個工作日內，由比較清幽的動物回覆訊息" />
          </fieldset>
        </form>
      </div>
    </PageContainer>
  );
};

export async function getStaticProps() {
  return {
    props: {
      memberData,
      projectsData,
    },
  };
}

export default Contact;

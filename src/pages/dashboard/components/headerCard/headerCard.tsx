import ButtonComp from "../../../../components/buttonComp";
import CardComp from "../../../../components/cardComp";
import image1 from "../../../../assets/pngwing.com.png";
import "./style.css";
import { useTranslation } from "react-i18next";

export default function HeaderCard() {
  const [t, i18n] = useTranslation();

  return (
    <CardComp>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div className="left-section">
          <div className="card-title">{t("EXAMS TIME")}</div>
          <p style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure est
            velit soluta, pariatur deserunt voluptate atque excepturi saepe
            fugiat
          </p>
          <p style={{ color: "lightgray" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
          </p>
          <ButtonComp title="View exams tips" style={{ maxWidth: 250 }} />
        </div>
        <img
          className="header-img"
          src={image1}
          alt="pic"
          style={{ height: 250, width: "40%" }}
        />
      </div>
    </CardComp>
  );
}

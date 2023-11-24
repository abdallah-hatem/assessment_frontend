import ButtonComp from "../../../../../components/buttonComp";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import "./style.css";
interface Props {
  style?: object;
  title?: string;
  btnTitle?: string;
}
export default function QuizItem({ style, title, btnTitle = "Title" }: Props) {
  return (
    <div style={style}>
      <div className="quiz-top">
        <HourglassTopIcon />
        <p style={{ marginLeft: 5 }}>{title}</p>
      </div>
      <div className="quiz-mid">
        <p>
          Course: <span>Physics</span>
        </p>
        <p>
          Topic: <span>Unit 2 forces</span>
        </p>
        <p>
          Due to: <span>20 Dec 2017-09:00 PM</span>
        </p>
      </div>
      <ButtonComp
        title={btnTitle}
        variant="outlined"
        style={{ width: "100%", border: "2px solid" }}
      />
    </div>
  );
}

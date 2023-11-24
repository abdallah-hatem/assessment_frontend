import ButtonComp from "../../../../../components/buttonComp";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import "./style.css";
interface Props {
  style?: object;
  title?: string;
  btnTitle?: string;
  dueTo?: string;
  courseName?: string;
}
export default function QuizItem({
  style,
  title = "unit 2, quiz",
  dueTo,
  btnTitle = "Start",
  courseName,
}: Props) {
  return (
    <div style={style}>
      <div className="quiz-top">
        <HourglassTopIcon />
        <p style={{ marginLeft: 5 }}>{title}</p>
      </div>
      <div className="quiz-mid">
        <p>
          Course: <span>{courseName}</span>
        </p>
        <p>
          Topic: <span>Unit 2 forces</span>
        </p>
        <p>
          Due to: <span>{dueTo}</span>
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

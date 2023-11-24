import CardComp from "../../../../components/cardComp";
import QuizItem from "./quizItem";

export default function DueCard() {
  const quizItems = [
    {
      title: "unit 2, quiz",
      btnTitle: "Start Quiz",
    },
    {
      title: "12-12 Assignment",
      btnTitle: "Start Assignment",
      style: { marginTop: 20 },
    },
  ];

  return (
    <CardComp
      headerTitle="Whats due"
      style={{ flex: 1, height: "fit-content" }}
    >
      {quizItems.map((el, index) => (
        <QuizItem btnTitle={el.btnTitle} title={el.title} style={el.style} key={index} />
      ))}
    </CardComp>
  );
}

import { useEffect, useState } from "react";
import CardComp from "../../../../components/cardComp";
import QuizItem from "./quizItem";

interface Props {
  data: any;
}
export default function DueCard({ data }: Props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data) setLoading(false);
  }, [data]);

  return (
    <CardComp
      headerTitle="Whats due"
      style={{ flex: 1, height: "fit-content" }}
    >
      {!loading ? (
        data.map((el: any, index: number) => (
          <QuizItem
            btnTitle={el.btnTitle}
            courseName={el.courseName}
            style={el.style}
            dueTo={el.endDate}
            key={index}
          />
        ))
      ) : (
        <h3>Loading</h3>
      )}
    </CardComp>
  );
}

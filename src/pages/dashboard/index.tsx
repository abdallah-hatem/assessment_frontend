import HeaderCard from "./components/headerCard/headerCard";
import AnnouncementCard from "./components/announcementsCard";
import DueCard from "./components/dueCard";
import RequireAuth from "../../components/Hoc/requireAuth";
import { useEffect, useState } from "react";
import GET_ANNOUNCEMENTS from "../../apis/announcements/getAllAnnouncements";
import GET_QUIZZES from "../../apis/quiz/getAllQuizzes";
import "./style.css";

function Dashboard() {
  const [quizData, setQuizData] = useState(null);
  const [announcementsData, setAnnouncementsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData().then(() => setLoading(false));
  }, []);

  async function getData() {
    GET_ANNOUNCEMENTS().then((data) => setAnnouncementsData(data.announcements));
    GET_QUIZZES().then((data) => setQuizData(data.quiz));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <HeaderCard />
      <br />
      {!loading && (
        <div className="bottom-container">
          <AnnouncementCard data={announcementsData} />
          <DueCard data={quizData} />
        </div>
      )}
    </div>
  );
}
export default RequireAuth(Dashboard);

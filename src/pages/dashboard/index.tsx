import HeaderCard from "./components/headerCard/headerCard";
import AnnouncementCard from "./components/announcementsCard";
import DueCard from "./components/dueCard";
import "./style.css";

function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <HeaderCard />
      <br />
      <div className="bottom-container">
        <AnnouncementCard />
        <DueCard />
      </div>
    </div>
  );
}
export default Dashboard;

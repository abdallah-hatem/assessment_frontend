import CardComp from "../../../../components/cardComp";
import AnnItem from "./announcementItem";

export default function AnnouncementCard() {
  return (
    <CardComp headerTitle="Announcements" style={{ flex: 3 }}>
      <AnnItem />
    </CardComp>
  );
}

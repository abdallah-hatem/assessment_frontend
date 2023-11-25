import { useEffect, useState } from "react";
import CardComp from "../../../../components/cardComp";
import AnnItem from "./announcementItem";

interface Props {
  data: any;
}

export default function AnnouncementCard({ data }: Props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (data) setLoading(false);
  }, [data]);

  return (
    <CardComp
      headerTitle="Announcements"
      style={{ flex: 3, height: "fit-content" }}
    >
      <>
        {!loading ? (
          <>
            {data.map((el: any, index: number) => (
              <AnnItem announcement={el.announcement} key={index} />
            ))}
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </>
    </CardComp>
  );
}

import "./style.css";

interface Props {
  announcement: string;
}

export default function AnnItem({ announcement }: Props) {
  return (
    <div className="ann-item">
      <div className="ann-item-profile">
        <div className="profile-pic">
          <img
            style={{ width: 50, height: 50, borderRadius: "50%", flex: 1 }}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="pic"
          />
        </div>
        <div className="profile-desc" style={{ flex: 1 }}>
          <p style={{ margin: 0, fontSize: 14, minWidth: "7.5rem" }}>
            Mr.Ahmad Mostafa
          </p>
          <p style={{ margin: 0, fontSize: 10 }}>Lorem ipsum</p>
        </div>
      </div>
      <div className="ann-item-p">{announcement}</div>
    </div>
  );
}

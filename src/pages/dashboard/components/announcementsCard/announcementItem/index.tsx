import "./style.css";

export default function AnnItem() {
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
          <p style={{ margin: 0 }}>Mr.Ahmad Mostafa</p>
          <p style={{ margin: 0, fontSize: 10 }}>Lorem ipsum</p>
        </div>
      </div>
      <div className="ann-item-p">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, quae?
        Libero sint neque minus sit rerum sapiente sunt officiis! Quisquam, non
        sequi ducimus cumque ab eaque enim odio eligendi deleniti.
      </div>
    </div>
  );
}

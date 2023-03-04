function ProfileCard({ image, title, handle, descr }) {
  return (
    <div className="card" style={{ minHeight: "100%" }}>
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="PDA" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <div className="subtitle is-6">{handle}</div>
        </div>
        <div className="description">{descr}</div>
      </div>
    </div>
  );
}
export default ProfileCard;

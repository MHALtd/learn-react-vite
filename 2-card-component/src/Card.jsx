import profilePic from "./assets/profile.png";

const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="avatar" />
      <h2 className="card-title">Mayonaka</h2>
      <p className=" card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, molestias.</p>
    </div>
  );
};

export default Card;

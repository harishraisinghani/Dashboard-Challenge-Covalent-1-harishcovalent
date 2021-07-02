import "../styles.css";

const Title = (props) => {
  return (
    <div className="Title">
      <h3>{props.name}</h3>
      <hr />
    </div>
  );
};

export default Title;

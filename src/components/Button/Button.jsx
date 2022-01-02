import "./style.css";

const Button = ({ text, onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick} className="button">
        {text}
      </button>
    </>
  );
};

export default Button;

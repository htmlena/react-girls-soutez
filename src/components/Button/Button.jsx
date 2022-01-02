import "./style.css";

const Button = ({ text, onClick, className }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={className}>
        {text}
      </button>
    </>
  );
};

export default Button;

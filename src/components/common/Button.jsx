const Button = ({ text, className, svg }) => {
  return (
    <button className={`${className} font-semibold text-base`}>
      {text} <span>{svg}</span>
    </button>
  );
};

export default Button;

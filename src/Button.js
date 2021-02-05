function Button({ color, setColor }) {
  return (
    <button
      onClick={() => {
        setColor(color);
      }}
      // className={color}
      style={{
        backgroundColor: color,
      }}
    >
      {color}
    </button>
  );
}

export default Button;

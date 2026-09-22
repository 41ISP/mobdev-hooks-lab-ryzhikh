import "./Input.css";

function Input({ value, onChange, onKeyDown }) {
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={onKeyDown}
      placeholder="Название книги..."
    />
  );
}

export default Input;
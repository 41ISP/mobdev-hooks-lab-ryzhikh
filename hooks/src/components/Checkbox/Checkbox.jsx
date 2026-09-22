import "./Checkbox.css";

function Checkbox({ id, checked, onChange }) {
  return <input className="checkbox" id={id} type="checkbox" checked={checked} onChange={onChange} />;
}

export default Checkbox;
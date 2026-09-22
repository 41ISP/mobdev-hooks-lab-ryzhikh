import Checkbox from "../Checkbox/Checkbox";
import "./FilterChip.css";

function FilterChip({ checked, onChange }) {
  return (
    <div className="filter-chip">
      <Checkbox id="filterCheckbox" checked={checked} onChange={onChange} />
      <label htmlFor="filterCheckbox">
        <span className="dot"></span>
        Только непрочитанные
      </label>
    </div>
  );
}

export default FilterChip;
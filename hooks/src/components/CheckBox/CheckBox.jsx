function CheckBox({id, checked, onChange, label}) {
    return(
        <div className="filter-chip">
            <input
            type="checkbox"
            id-{id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}
export default CheckBox;
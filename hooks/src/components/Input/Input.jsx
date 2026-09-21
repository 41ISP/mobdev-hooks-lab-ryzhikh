function Input ({ value, onChange, placeholder}) {
    return (
        <input 
        classname="input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.velue)}
        />
    );
}
export default Input;
import CheckBox from '../CheckBox/CheckBox';

function FilterChip({checked, onChange}) {
    return(
        <CheckBox
        id="filterCheckBox"
        checked={checked}
        onChange={onChange}
        label="Только непрочитанные"
        />
    );
}
export default FilterChip;
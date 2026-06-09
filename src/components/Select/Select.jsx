import './Select.scss'
import clsx from "clsx";
import Icon from "@/components/Icon/index.js";

export default ({ filterKey, filterData, className }) => {
  const {
    icon,
    placeholder,
    options = [],
  } = filterData;

  return (
    <div className={clsx('custom-select-wrapper', className)}>
      {icon && (
        <Icon
          name={icon}
          className='custom-select-icon'
          hasFill
        />
      )}

      <select
        className="js-choices-select"
        name={filterKey}
        data-placeholder={placeholder}
      >
        <option value=""></option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
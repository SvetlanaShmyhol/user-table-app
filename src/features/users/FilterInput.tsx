import React from 'react';

const FilterInput: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ label, value, onChange }) => {
  return (
    <div className="relative text-left text-sm font-semibold text-gray-600">
      <label>{label}</label>
      <input className="indent-6 border border-gray-300 rounded px-2 py-1" type="text" value={value} onChange={(e) => onChange(e.target.value)} />
      <svg className="fill-slate-400 w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-100" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0325 10.5H11.625L15.3675 14.25L14.25 15.3675L10.5 11.625V11.0325L10.2975 10.8225C9.4425 11.5575 8.3325 12 7.125 12C4.4325 12 2.25 9.8175 2.25 7.125C2.25 4.4325 4.4325 2.25 7.125 2.25C9.8175 2.25 12 4.4325 12 7.125C12 8.3325 11.5575 9.4425 10.8225 10.2975L11.0325 10.5ZM3.75 7.125C3.75 8.9925 5.2575 10.5 7.125 10.5C8.9925 10.5 10.5 8.9925 10.5 7.125C10.5 5.2575 8.9925 3.75 7.125 3.75C5.2575 3.75 3.75 5.2575 3.75 7.125Z" />
</svg>
    </div>
  );
};

export default FilterInput;

import './index.css';

type NameInputProps = {
  placeholder: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<NameInputProps> = ({
  placeholder,
  label,
  type,
  value,
  onChange,
}) => (
  <div className="input__container">
    <label>{label}</label>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

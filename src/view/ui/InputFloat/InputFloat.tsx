import { useState } from "react";
import s from "./index.module.css";

type Props = {
  value: string;
  validate?: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange: (val: string) => void;
  onBlur: () => void;
  placeholder: string;
};

export const InputFloat = ({
  value,
  onChange,
  onBlur,
  placeholder,
  validate,
}: Props) => {
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(false);
    onBlur();
  };

  return (
    <div className={s.inputWrapper}>
      <input
        title="floating input"
        inputMode="numeric"
        type="text"
        className={s.input}
        value={value}
        onChange={(e) => {
          const val = e.target.value;
          if (val === "" || /^[\d/-]*$/.test(val)) {
            onChange(val);
            validate?.(e);
          }
        }}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
      />
      <label className={`${s.label} ${focused || value ? s.labelActive : ""}`}>
        {placeholder}
      </label>
    </div>
  );
};

import s from "./index.module.scss";
import classNames from "classnames";
import { InputHTMLAttributes, useRef } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

export const InputDate = ({
  className,
  onChangeDate,
  valueDate,
  max,
  ...otherProps
}: {
  className?: string;
  onChangeDate?: (e: any) => void;
  valueDate?: string;
  max?: string;
} & HTMLInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current && "showPicker" in inputRef.current) {
      (inputRef.current as any).showPicker();
    }
  };

  return (
    <div
      className={classNames(s.InputDate, className && className)}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        className={s.inputDate}
        {...otherProps}
        type="date"
        onChange={onChangeDate}
        value={valueDate ?? undefined}
        max={max}
      />
    </div>
  );
};

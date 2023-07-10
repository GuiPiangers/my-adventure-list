import { ReactNode, SelectHTMLAttributes } from "react";
import InputStyle from "./InputStyle";

type Props = {
  label?: string;
  children: ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({ label, children, ...rest }: Props) {
  return (
    <InputStyle label={label}>
      <select {...rest}>{children}</select>
    </InputStyle>
  );
}

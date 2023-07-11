import { InputHTMLAttributes } from "react";
import InputStyle from "./InputStyle";

type Props = { label: string } & InputHTMLAttributes<HTMLInputElement>;

export default function TextArea({ label, ...rest }: Props) {
  return (
    <InputStyle label={label}>
      <input {...rest} />
    </InputStyle>
  );
}

"use client";

import { FormEvent, TextareaHTMLAttributes } from "react";
import InputStyle from "./InputStyle";

type Props = {
  label?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({ label, ...rest }: Props) {
  const handleOnChange = (e: FormEvent<HTMLTextAreaElement>) => {
    const scrollHeight = e.currentTarget.scrollHeight;
    if (e.currentTarget.value.length > 0) {
      e.currentTarget.style.height = `${scrollHeight}px`;
    } else e.currentTarget.style.height = "auto";
  };

  return (
    <InputStyle label={label}>
      <textarea {...rest} rows={1} onChangeCapture={handleOnChange}></textarea>
    </InputStyle>
  );
}

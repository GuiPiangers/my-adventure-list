import InputComponent from "./InputComponent";
import { FormEvent } from "react";

export default function TextArea() {
  const handleOnChange = (e: FormEvent<HTMLTextAreaElement>) => {
    const scrollHeight = e.currentTarget.scrollHeight;
    if (e.currentTarget.value.length > 0) {
      e.currentTarget.style.height = `${scrollHeight}px`;
    } else e.currentTarget.style.height = "auto";
  };

  return (
    <InputComponent asChild label="Observação">
      <textarea rows={1} onChangeCapture={handleOnChange}></textarea>
    </InputComponent>
  );
}

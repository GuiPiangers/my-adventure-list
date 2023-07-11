import useId from "@mui/material/utils/useId";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

type Props = {
  label?: string;
  asChild?: boolean;
  children?: ReactNode;
  className?: string;
};

export default function InputStyle({
  asChild = true,
  label,
  children,
  className,
  ...rest
}: Props) {
  const id = useId();
  const Component = asChild ? Slot : "div";

  return (
    <div className="relative mt-2 flex flex-col">
      <Component
        className={`peer-target peer max-h-28 
        min-h-[40px] rounded-md border border-neutral-600 
        bg-transparent px-2 py-2 placeholder:opacity-0 focus:outline-primary
        ${className}
        `}
        placeholder={label}
        {...rest}
        id={id}
      >
        {children}
      </Component>
      {label && (
        <label
          className="pointer-events-none absolute -top-0.5 left-2 -translate-y-1/2 
            bg-light-100 px-1 text-sm transition-all peer-placeholder-shown:top-1/2 
            peer-placeholder-shown:text-base peer-focus:-top-0.5 peer-focus:text-sm "
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
}

import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const Column = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(`flex flex-col`, className)} {...props}>
      {children}
    </div>
  );
};

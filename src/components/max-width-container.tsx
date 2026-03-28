import { ReactNode } from "react";

interface MaxWidthContainerProps {
  children: ReactNode;
}
export function MaxWidthContainer({ children }: MaxWidthContainerProps) {
  return (
    <div className="max-w-[3750px] w-full overflow-hidden mx-auto pt-32 lg:pt-0">
      {children}
    </div>
  );
}

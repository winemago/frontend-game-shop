import { ReactNode } from "react";

export default function CommonCard({ children }: { children: ReactNode }) {
  return (
    <div className="border border-stroke-secondary rounded-common p-6">
      {children}
    </div>
  );
}

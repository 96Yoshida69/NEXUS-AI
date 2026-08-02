import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function OSContainer({ children }: Props) {
  return <div className="os-container">{children}</div>;
}

export default OSContainer;

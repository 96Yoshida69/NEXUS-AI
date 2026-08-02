import type { ReactNode } from "react";
import Header from "./Header";
import OSContainer from "./OSContainer";

interface Props {
  children: ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <OSContainer>
      <Header />

      {children}
    </OSContainer>
  );
}

export default MainLayout;

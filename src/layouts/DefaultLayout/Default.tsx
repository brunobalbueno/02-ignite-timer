import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { LayoutContainer } from "./style";

export function Default() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}

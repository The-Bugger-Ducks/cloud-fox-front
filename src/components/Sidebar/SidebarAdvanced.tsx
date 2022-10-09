import { CustomTreeItemLike } from ".";
import { NavbarLink, NavbarSpan } from "./styles";

export default function SidebarAdvanced() {
  const routes: CustomTreeItemLike[] = [];

  return (
    <>
      {routes?.map((route, index) => (
        <div key={index}>
          {route.path ? (
            <NavbarLink to={route.path}>{route.text}</NavbarLink>
          ) : (
            <NavbarSpan onClick={route?.onClick}>{route.text}</NavbarSpan>
          )}
        </div>
      ))}
    </>
  );
}

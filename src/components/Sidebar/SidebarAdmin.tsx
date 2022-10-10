import { CustomTreeItemLike } from ".";
import { NavbarLink, NavbarSpan } from "./styles";

export default function SidebarAdmin() {
  const routes: CustomTreeItemLike[] = [
    {
      text: "Usuários privilegiados",
      path: "/privileged-users",
    },
  ];

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

import { Outlet } from "react-router-dom";
import { ViewFirst, ViewLogin } from "../../views";

export const ProtectedAuth = () => {
  return (
    <ViewLogin>
      <ViewFirst>
        <Outlet />
      </ViewFirst>
    </ViewLogin>
  );
};

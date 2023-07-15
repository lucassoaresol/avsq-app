import { useAuthContext } from "../../../contexts";
import { OptionsAdmin } from "./OptionsAdmin";
import { OptionsCommon } from "./OptionsCommon";

export const Options = () => {
  const { userData } = useAuthContext();
  switch (userData?.role) {
    case "ADMIN":
      return <OptionsAdmin />;

    case "EDITOR":
      return <OptionsCommon />;

    case "COMMON":
      return <OptionsCommon />;

    default:
      return <></>;
  }
};

import { AccountBox, Home } from "@mui/icons-material";
import { useDrawerContext } from "../../../contexts";
import { ListItemLinkOpen, OtherListItemLink } from "../item";
import { Profile } from "../components";

export const OptionsCommon = () => {
  const { handleClickProfile, openProfile } = useDrawerContext();
  return (
    <>
      <OtherListItemLink icon={<Home />} label="Página Inicial" to="/" />
      <ListItemLinkOpen
        onClick={handleClickProfile}
        open={openProfile}
        icon={<AccountBox />}
        label="Perfil"
      >
        <Profile />
      </ListItemLinkOpen>
    </>
  );
};

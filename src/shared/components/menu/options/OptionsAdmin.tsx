import {
  AccountBox,
  Home,
  People,
  School,
  Workspaces,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { useDrawerContext } from "../../../contexts";
import { Profile } from "../components";
import { ListItemLinkOpen, OtherListItemLink } from "../item";
import { OptionsSchoolHome } from "./OptionsSchoolHome";

export const OptionsAdmin = () => {
  const location = useLocation();
  const { handleClickProfile, openProfile } = useDrawerContext();

  return location.pathname.includes("/home/school") ? (
    <OptionsSchoolHome />
  ) : (
    <>
      <OtherListItemLink icon={<Home />} label="Página Inicial" />
      <OtherListItemLink icon={<People />} label="Usuários" to="/user" />
      <OtherListItemLink icon={<School />} label="Escolas" to="/school" />
      <OtherListItemLink icon={<Workspaces />} label="Turmas" to="/class" />
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

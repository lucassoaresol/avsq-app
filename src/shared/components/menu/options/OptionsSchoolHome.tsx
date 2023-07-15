import { useDrawerContext } from "../../../contexts";
import { AccountBox, Home, People, Summarize } from "@mui/icons-material";
import { ListItemLinkOpen, OtherListItemLink } from "../item";
import { Profile, User } from "../components";

export const OptionsSchoolHome = () => {
  const { handleClickUser, handleClickProfile, openUser, openProfile } =
    useDrawerContext();
  return (
    <>
      <OtherListItemLink
        icon={<Home />}
        label="Página Inicial"
        to="/home/school"
      />
      <ListItemLinkOpen
        onClick={handleClickUser}
        open={openUser}
        icon={<People />}
        label="Usuários"
      >
        <User />
      </ListItemLinkOpen>
      <OtherListItemLink icon={<Summarize />} label="Relatório" to="/report" />
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

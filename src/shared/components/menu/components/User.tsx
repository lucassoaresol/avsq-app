import { List } from "@mui/material";
import { useAuthContext } from "../../../contexts";
import { ListItemLink } from "../item";
import {
  HowToReg,
  PeopleAlt,
  Person,
  Person2,
  PersonAdd,
} from "@mui/icons-material";

export const User = () => {
  const { userData } = useAuthContext();
  switch (userData?.role) {
    case "ADMIN":
      return (
        <List component="div" disablePadding>
          <ListItemLink
            icon={<PersonAdd />}
            label="Administrador"
            to="user/create"
          />
          <ListItemLink
            icon={<PersonAdd />}
            label="Diretor"
            to="user/create/director"
          />
          <ListItemLink
            icon={<Person />}
            label="Secretário"
            to="user/define/secret"
          />
          <ListItemLink icon={<Person2 />} label="Usuário" to="user" />
          <ListItemLink icon={<PeopleAlt />} label="Listar" to="user/list" />
          <ListItemLink icon={<HowToReg />} label="Ativar" to="user/active" />
        </List>
      );

    case "EDITOR":
      return (
        <List component="div" disablePadding>
          <ListItemLink
            icon={<PersonAdd />}
            label="Servidor"
            to="school/create/server"
          />
          <ListItemLink
            icon={<PeopleAlt />}
            label="Listar"
            to="school/list/server"
          />
        </List>
      );

    default:
      return <></>;
  }
};

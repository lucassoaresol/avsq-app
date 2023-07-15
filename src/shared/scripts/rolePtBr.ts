import { iRole } from "../interfaces";

export const rolePtBr = (role: iRole = "EDITOR") => {
  switch (role) {
    case "ADMIN":
      return "Administrador";

    case "EDITOR":
      return "Editor";

    case "COMMON":
      return "Comum";
  }
};

import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import {
  iChildren,
  iSelectBase,
  iUser,
  iUserFirstRequest,
  iUserPasswordRequest,
  iUserUpdateRequest,
} from "../interfaces";
import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import { apiAuth, apiUser } from "../services";
import { useAppThemeContext } from "./ThemeContext";
import { useAuthContext } from "./AuthContext";

interface iUserContextData {
  editPassword: (id: string, data: iUserPasswordRequest) => Promise<void>;
  first: (id: string, data: iUserFirstRequest) => Promise<void>;
  updateUser: (id: string, data: iUserUpdateRequest) => Promise<void>;
  updateAllUser: (
    id: string,
    data: FieldValues,
    is_all: boolean,
    back?: string
  ) => Promise<void>;
  updateUserData: iUser | undefined;
  setUpdateUserData: Dispatch<SetStateAction<iUser | undefined>>;
  verifyUser: (id: string) => void;
  userSelect: iSelectBase | undefined;
  loadingUser: boolean;
  userRetrieve: iUser | undefined;
  userDataRetrieve: (id: string, query: string) => void;
}

const UserContext = createContext({} as iUserContextData);

export const UserProvider = ({ children }: iChildren) => {
  const navigate = useNavigate();
  const { setLoading, handleSucess, handleError } = useAppThemeContext();
  const { setUserData } = useAuthContext();
  const [updateUserData, setUpdateUserData] = useState<iUser>();
  const [userSelect, setUserSelect] = useState<iSelectBase>();
  const [loadingUser, setLoadingUser] = useState(true);
  const [userRetrieve, setUserRetrieve] = useState<iUser>();

  const verifyUser = useCallback((id: string) => {
    setLoading(true);
    apiAuth
      .verify(`?user_id=${id}`)
      .then((res) => setUserSelect(res.select))
      .catch(() => navigate("/"))
      .finally(() => setLoading(false));
  }, []);

  const userDataRetrieve = useCallback((id: string, query: string) => {
    setLoadingUser(true);
    apiUser
      .retrieve(id, query)
      .then((res) => setUserRetrieve(res))
      .finally(() => setLoadingUser(false));
  }, []);

  const handleFirstUser = useCallback(
    async (id: string, data: iUserFirstRequest) => {
      try {
        setLoading(true);
        const user = await apiUser.update(id, data);
        handleSucess("Dados cadastrados com sucesso");
        setUserData(user);
        navigate("/");
      } catch {
        handleError("Não foi possível cadastrar os dados no momento!");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleUpdateUser = useCallback(
    async (id: string, data: iUserUpdateRequest) => {
      try {
        setLoading(true);
        const user = await apiUser.update(id, data);
        handleSucess("Dados alterado com sucesso");
        setUserData(user);
        navigate("/");
      } catch {
        handleError("Não foi possível atualizar os dados no momento!");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleUpdateAllUser = useCallback(
    async (id: string, data: FieldValues, is_all: boolean, back?: string) => {
      try {
        setLoading(true);
        const user = await apiUser.update(id, data);
        setUpdateUserData(user);
        if (!is_all) handleSucess("Sucesso ao alterar o estado do usuário!");
        if (back) navigate(back);
      } catch {
        if (!is_all)
          handleError(
            "Não foi possível atualizar o estado do usuário no momento!"
          );
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handlePasswordUser = useCallback(
    async (id: string, data: iUserPasswordRequest) => {
      try {
        setLoading(true);
        await apiUser.update(id, data);
        handleSucess("Senha alterada com sucesso");
        navigate("/");
      } catch {
        handleError("Senha atual incorreta!");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <UserContext.Provider
      value={{
        first: handleFirstUser,
        updateUser: handleUpdateUser,
        editPassword: handlePasswordUser,
        updateAllUser: handleUpdateAllUser,
        updateUserData,
        setUpdateUserData,
        userSelect,
        verifyUser,
        loadingUser,
        userDataRetrieve,
        userRetrieve,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

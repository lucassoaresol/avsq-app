import { iChildren } from "../interfaces";
import { AuthProvider } from "./AuthContext";
import { DrawerProvider } from "./DrawerContext";
import { DialogProvider } from "./DialogContext";
import { PaginationProvider } from "./PaginationContext";
import { AppThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";

const Providers = ({ children }: iChildren) => (
  <AppThemeProvider>
    <DialogProvider>
      <AuthProvider>
        <PaginationProvider>
          <UserProvider>
            <DrawerProvider>{children}</DrawerProvider>
          </UserProvider>
        </PaginationProvider>
      </AuthProvider>
    </DialogProvider>
  </AppThemeProvider>
);

export default Providers;
export { useAuthContext } from "./AuthContext";
export { useDrawerContext } from "./DrawerContext";
export { useDialogContext } from "./DialogContext";
export { usePaginationContext } from "./PaginationContext";
export { useAppThemeContext } from "./ThemeContext";
export { useUserContext } from "./UserContext";

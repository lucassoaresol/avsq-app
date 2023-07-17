import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import {
  EditPasswordPage,
  EditProfilePage,
  HomePage,
  PasswordPage,
  RetrieveUserPage,
  UserPage,
} from "../pages";
import { ProtectedAdmin, ProtectedAuth } from "../shared/components";
import { RetrievePostPage } from "../pages/post";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/password/:userId/:token" element={<PasswordPage />} />
      <Route element={<ProtectedAuth />}>
        <Route element={<ProtectedAdmin />}>
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/:user_id" element={<RetrieveUserPage />} />
          <Route path="/home/school" element={<HomePage isHome />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<RetrievePostPage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        <Route path="/profile/edit/password" element={<EditPasswordPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../shared/contexts";
import { LayoutBasePage } from "../../shared/layouts";
import { TitleUserRetrievePage, ToolsUser } from "../../shared/components";
import { ViewUserData } from "../../shared/views";

export const RetrieveUserPage = () => {
  const { user_id } = useParams();
  const { verifyUser } = useUserContext();

  useEffect(() => {
    if (user_id) verifyUser(user_id);
  }, [user_id]);

  return (
    <LayoutBasePage
      title={<TitleUserRetrievePage />}
      tools={<ToolsUser back="/user" />}
    >
      <ViewUserData id={user_id} />
    </LayoutBasePage>
  );
};

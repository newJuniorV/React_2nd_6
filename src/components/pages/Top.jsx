import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push({ pathname: "/users", state: { isAdmin: false } });
  };

  return (
    <SContainer>
      <h2>This is Top page!</h2>
      <SecondaryButton onClick={onClickAdmin}>admin user</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>general user</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

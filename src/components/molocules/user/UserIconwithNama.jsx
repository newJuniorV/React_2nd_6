import React, { memo, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <Scontainer>
      <Simg height={160} width={160} src={image} alt="profile" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>edit</SEdit>}
    </Scontainer>
  );
});

const Scontainer = styled.div`
  text-align: center;
`;

const Simg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: green;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;

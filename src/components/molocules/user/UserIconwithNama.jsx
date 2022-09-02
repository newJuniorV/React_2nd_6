import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name, isAdmin } = props;
  return (
    <Scontainer>
      <Simg height={160} width={160} src={image} alt="profile" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>edit</SEdit>}
    </Scontainer>
  );
};

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

import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molocules/user/UserIconwithNama";

export const UserCard = (props) => {
  const { user } = props;

  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      {/* <img height={160} width={160} src={user.image} alt="profile" />
      <p>{user.name}</p> */}
      <SDl>
        <dt>mail</dt>
        <dd>{user.email}</dd>

        <dt>TEL</dt>
        <dd>{user.phone}</dd>

        <dt>company</dt>
        <dd>{user.company.name}</dd>

        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 40px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;

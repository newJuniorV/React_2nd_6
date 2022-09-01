import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://source.unsplash.com/VATpX2rS5sM"
        alt="profile"
      />
      <p>name</p>
      <dl>
        <dt>mail</dt>
        <dd>example@.com</dd>
        <dt>TEL</dt>
        <dd>000-999-8888</dd>
        <dt>company</dt>
        <dd>brycen</dd>
        <dt>WEB</dt>
        <dd>htttp.com</dd>
      </dl>
    </div>
  );
};

const SDL = styled.dl`
  text-align: left;
`;

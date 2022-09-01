import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <div>
      <SContainer>
        <Input placeholder="serching option" />
        <SButoonWrapper>
          <PrimaryButton>search</PrimaryButton>
        </SButoonWrapper>
      </SContainer>
    </div>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButoonWrapper = styled.div`
  padding-left: 8px;
`;

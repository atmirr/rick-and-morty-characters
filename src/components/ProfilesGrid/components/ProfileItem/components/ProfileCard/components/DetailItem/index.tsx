import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding: 6px 1px;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #7c7c7c;
`;

const Value = styled.span`
  padding-left: 3px;
  color: #222222;
`;

type PropTypes = {
  label: string;
  children: string | React.ReactNode;
};

function DetailItem({ label, children }: PropTypes): React.ReactElement {
  return (
    <Wrapper>
      <Label>{label}:</Label>
      <Value>{children}</Value>
    </Wrapper>
  );
}

export default DetailItem;

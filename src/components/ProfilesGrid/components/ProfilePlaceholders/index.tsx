import React from 'react';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

const PlaceholderWrapper = styled.div`
  margin: 1.1em 0.7em;
  border: 3px solid #f3f3f3;
  border-radius: 15px;
`;

type PropTypes = {
  count: number;
  [key: string]: string | number;
};

function ProfilePlaceholders({
  count = 1,
  ...props
}: PropTypes): React.ReactElement {
  const ProfilePlaceholder = (props: { [key: string]: string | number }) => (
    <PlaceholderWrapper>
      <ContentLoader
        speed={1}
        width={273}
        height={500}
        viewBox="0 0 273 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="15" y="15" rx="15" ry="15" width="243" height="200" />
        <rect x="15" y="239" rx="0" ry="0" width="243" height="10" />
        <rect x="15" y="264" rx="0" ry="0" width="243" height="10" />
        <rect x="15" y="289" rx="0" ry="0" width="243" height="10" />
        <rect x="15" y="314" rx="0" ry="0" width="243" height="10" />
        <rect x="15" y="339" rx="0" ry="0" width="243" height="10" />
        <rect x="15" y="364" rx="0" ry="0" width="243" height="10" />
        <rect x="15" y="389" rx="0" ry="0" width="243" height="10" />
        <rect x="15" y="414" rx="0" ry="0" width="243" height="10" />
        <rect x="15" y="439" rx="0" ry="0" width="243" height="10" />
        <rect x="15" y="464" rx="0" ry="0" width="243" height="10" />
      </ContentLoader>
    </PlaceholderWrapper>
  );
  const PlaceholderItems = [];
  for (let i = 0; i < count; i++) {
    PlaceholderItems.push(
      <ProfilePlaceholder
        key={i}
        uniqueKey={`profile-placeholder-${i}`}
        data-testid={`profile-placeholder-${i}`}
        {...props}
      />,
    );
  }
  return <>{PlaceholderItems}</>;
}

export default ProfilePlaceholders;

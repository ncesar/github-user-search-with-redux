import React from 'react';
import { Content } from 'components/Content';
import { Topbar } from 'components/Topbar';

export const Homepage = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Content hideTitle={false} />
    </React.Fragment>
  );
};

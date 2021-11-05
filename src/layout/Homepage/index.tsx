import React from 'react';
import { Content } from 'components/Content';
import { Topbar } from 'components/Topbar';
import { MotionWrapper } from 'components/MotionWrapper';

export const Homepage: React.FC = () => {
  return (
    <React.Fragment>
      <Topbar />
      <MotionWrapper>
        <Content hideTitle={false} />
      </MotionWrapper>
    </React.Fragment>
  );
};

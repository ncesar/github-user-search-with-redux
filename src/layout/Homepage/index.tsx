import React from 'react';
import { Content } from 'components/Content';
import { Topbar } from 'components/Topbar';
import { MotionWrapper } from 'components/MotionWrapper';

export const Homepage: React.FC = () => {
  return (
    <MotionWrapper>
      <React.Fragment>
        <Topbar />
        <Content hideTitle={false} />
      </React.Fragment>
    </MotionWrapper>
  );
};

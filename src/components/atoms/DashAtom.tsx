import * as React from 'react';
import Dash from 'react-native-dash';
import {GRAY} from 'src/styles/colors';
import {SCALE_5} from 'src/styles/spacing';

interface DashAtomProps {}

const DashAtom: React.FC<DashAtomProps> = ({}) => {
  return (
    <Dash
      dashColor={GRAY}
      dashGap={3}
      dashLength={4}
      dashThickness={1}
      style={{width: '100%', height: 1, paddingVertical: SCALE_5}}
    />
  );
};

export default DashAtom;

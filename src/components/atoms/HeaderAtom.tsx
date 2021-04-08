import * as React from 'react';
import {View, Text} from 'react-native';
import TextAtom from 'src/components/atoms/TextAtom';

interface HeaderAtomProps {
  title: string;
}

const HeaderAtom: React.FC<HeaderAtomProps> = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextAtom text={props.title} />
    </View>
  );
};

export default HeaderAtom;

import * as React from 'react';
import {View, Text} from 'react-native';
import HeaderMolecule from 'src/components/molecules/HeaderMolecule';

interface CompletedProps {}

const Completed: React.FC<CompletedProps> = ({}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderMolecule title="Completed" />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>Completed Screen</Text>
      </View>
    </View>
  );
};

export default Completed;

import * as React from 'react';
import {View, Text} from 'react-native';
import HeaderMolecule from 'src/components/molecules/HeaderMolecule';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderMolecule title="Settings" />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>Settings Screen</Text>
      </View>
    </View>
  );
};

export default Settings;

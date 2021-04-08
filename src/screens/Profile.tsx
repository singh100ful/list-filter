import * as React from 'react';
import {View, Text} from 'react-native';
import HeaderMolecule from 'src/components/molecules/HeaderMolecule';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <View style={{flex: 1}}>
      <HeaderMolecule title="Profile" />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
};

export default Profile;

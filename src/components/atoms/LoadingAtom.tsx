import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {PRIMARY} from 'src/styles/colors';

interface LoadingAtomProps {}

const LoadingAtom: React.FC<LoadingAtomProps> = ({}) => {
  return <ActivityIndicator color={PRIMARY} size="large" />;
};

export default LoadingAtom;

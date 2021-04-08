import * as React from 'react';
import {View} from 'react-native';
import {SCALE_20, SCALE_30} from 'src/styles/spacing';
import TextAtom from 'src/components/atoms/TextAtom';

interface InitialsAtomProps {
  initial: string;
}

const InitialsAtom: React.FC<InitialsAtomProps> = props => {
  const [color, setColor] = React.useState('');

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  };

  React.useEffect(() => {
    getRandomColor();
  }, []);

  return (
    <View
      style={{
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        width: SCALE_30 + SCALE_20,
        height: SCALE_30 + SCALE_20,
      }}>
      <TextAtom
        style={{color: 'white', fontSize: 25}}
        text={props.initial.charAt(0)}
      />
    </View>
  );
};

export default InitialsAtom;

import * as React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {WHITE} from 'src/styles/colors';
import {moderateScale} from 'src/styles/mixins';
import {SCALE_10, SCALE_15} from 'src/styles/spacing';
import {FONT_SIZE_20} from 'src/styles/typography';
import TextAtom from 'src/components/atoms/TextAtom';

interface HeaderMoleculeProps {
  title: string;
}

const HeaderMolecule: React.FC<HeaderMoleculeProps> = props => {
  return (
    <LinearGradient
      colors={['#FF8000', '#FEB83B']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{height: moderateScale(60)}}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: SCALE_15,
          paddingHorizontal: SCALE_10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TextAtom
          style={{fontSize: FONT_SIZE_20, color: WHITE, fontWeight: 'bold'}}
          text={props.title}
        />
        <View style={{flexDirection: 'row'}}>{props.children}</View>
      </View>
    </LinearGradient>
  );
};

export default HeaderMolecule;

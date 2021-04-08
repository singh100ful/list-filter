import * as React from 'react';
import {View, Text, Pressable, Easing} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/Ionicons';
import {getColor} from 'src/shared/utils/getColor';
import {getDate} from 'src/shared/utils/getDate';
import {BLACK, GRAY, WHITE} from 'src/styles/colors';
import {SCALE_10, SCALE_20} from 'src/styles/spacing';
import {FONT_SIZE_16, FONT_SIZE_12, FONT_SIZE_14} from 'src/styles/typography';
import DashAtom from 'src/components/atoms/DashAtom';
import InitialsAtom from 'src/components/atoms/InitialsAtom';
import TextAtom from 'src/components/atoms/TextAtom';

interface ListMoleculeProps {
  item: Data;
}

const ListMolecule: React.FC<ListMoleculeProps> = ({item}) => {
  const [collapse, setCollapse] = React.useState(true);

  let date = new Date(item.created);
  const formattedDate = getDate(date);
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        paddingHorizontal: SCALE_10,
        paddingTop: SCALE_10,
        margin: SCALE_10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <InitialsAtom initial={item.title} />
          <View style={{paddingHorizontal: SCALE_10}}>
            <TextAtom style={{fontSize: FONT_SIZE_16}} text={item.title} />
            <TextAtom
              style={{fontSize: FONT_SIZE_12, color: GRAY}}
              text={item.subtitle}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: getColor(item.status),
            paddingHorizontal: SCALE_10,
            borderRadius: SCALE_10,
          }}>
          <TextAtom style={{color: WHITE}} text={item.status} />
        </View>
      </View>
      <DashAtom />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="calendar-sharp" color={GRAY} size={SCALE_20} />
        <Text
          style={{
            fontSize: FONT_SIZE_14,
            paddingHorizontal: SCALE_10,
            color: GRAY,
          }}>
          Created: <TextAtom style={{color: BLACK}} text={formattedDate} />
        </Text>
      </View>
      <DashAtom />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          paddingVertical: SCALE_10,
        }}>
        <Icon name="list-sharp" color={GRAY} size={SCALE_20} />
        <TextAtom
          style={{fontSize: FONT_SIZE_14, paddingHorizontal: SCALE_10}}
          text={item.short_desc}
        />
      </View>
      <Collapsible collapsed={collapse} easing={Easing.ease}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Icon name="clipboard-outline" color={GRAY} size={SCALE_20} />
          <TextAtom
            style={{fontSize: FONT_SIZE_14, paddingHorizontal: SCALE_10}}
            text={item.long_desc}
          />
        </View>
      </Collapsible>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Pressable onPress={() => setCollapse(!collapse)}>
          {collapse ? (
            <Icon name="chevron-down" size={25} />
          ) : (
            <Icon name="chevron-up" size={25} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default ListMolecule;

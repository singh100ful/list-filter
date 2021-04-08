import {NavigationProp, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  View,
  Pressable,
  FlatList,
  Modal,
  useWindowDimensions,
  ScrollView,
  RefreshControl,
  TextInput,
} from 'react-native';
import {TabParamsList} from 'src/layout/Layout';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import {BLACK, GRAY, LIGHT, PRIMARY, WHITE} from 'src/styles/colors';
import HeaderMolecule from 'src/components/molecules/HeaderMolecule';
import {baseurl} from 'src/shared/shared';
import {
  SCALE_10,
  SCALE_15,
  SCALE_20,
  SCALE_30,
  SCALE_40,
  SCALE_5,
} from 'src/styles/spacing';
import ListMolecule from 'src/components/molecules/ListMolecule';
import LoadingAtom from 'src/components/atoms/LoadingAtom';
import {FONT_SIZE_30} from 'src/styles/typography';
import TextAtom from 'src/components/atoms/TextAtom';

interface ActiveProps {
  navigation: NavigationProp<TabParamsList, 'Active'>;
}

const Active: React.FC<ActiveProps> = props => {
  const [initial, setInitial] = React.useState<Data[]>([]);
  const [data, setData] = React.useState<Data[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [search, setSearch] = React.useState('');

  const navigation = useNavigation();

  let filterOption: string[] = [];

  const [modal, setModal] = React.useState(false);
  const windowWidth = useWindowDimensions().width;

  const fetchData = async () => {
    const header: Headers = new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    });
    setLoading(true);
    return fetch(baseurl, {
      method: 'get',
      headers: header,
    })
      .then((response: any) => response.json())
      .then(data => {
        setLoading(false);
        setInitial(data);
        setData(data);
      })
      .catch(err => {
        setError(err);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (initial.length !== 0) {
    for (var i = 0; i < initial.length; i++) {
      filterOption.push(initial[i].status);
    }

    filterOption = filterOption.filter((c, index) => {
      return filterOption.indexOf(c) === index;
    });
  }

  const searchFilter = text => {
    setSearch(text);

    const newData: any = initial.filter((item: Data) => {
      if (item !== null) {
        const title = item.title.toUpperCase();
        const subtitle = item.subtitle.toUpperCase();

        const textData = text.toUpperCase();

        return title.indexOf(textData) > -1 || subtitle.indexOf(textData) > -1;
      }
    });

    if (text === '') {
      setData(initial);
    } else {
      setData(newData);
    }
  };

  const filter = text => {
    const newData: any = initial.filter((item: Data) => {
      if (item !== null) {
        const title = item.status.toUpperCase();

        const textData = text.toUpperCase();

        return title.indexOf(textData) > -1;
      }
    });
    setModal(false);

    if (text === '') {
      setData(initial);
    } else {
      setData(newData);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(148,148,148,0.5)',
          }}>
          <View
            style={{
              width: windowWidth - SCALE_30,
              margin: SCALE_10,
              backgroundColor: 'white',
              borderRadius: SCALE_10,
              paddingBottom: SCALE_10,
              alignItems: 'center',
              shadowColor: BLACK,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <View
              style={{
                backgroundColor: LIGHT,
                width: '100%',
                borderTopRightRadius: SCALE_10,
                borderTopLeftRadius: SCALE_10,
                padding: SCALE_15,
              }}>
              <TextAtom
                style={{color: GRAY, textTransform: 'uppercase'}}
                text="Choose Option From Below"
              />
              <View
                style={{
                  position: 'absolute',
                  top: SCALE_5,
                  right: SCALE_10,
                }}>
                <Icon name="close" size={30} onPress={() => setModal(false)} />
              </View>
            </View>
            <ScrollView
              style={{
                width: '100%',
                height: '50%',
                paddingHorizontal: SCALE_15,
              }}>
              {filterOption
                ? filterOption.map((data: string, index: number) => {
                    return (
                      <Pressable
                        onPress={() => filter(data)}
                        key={index}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingVertical: SCALE_15,
                          borderBottomColor: GRAY,
                          borderBottomWidth: 0.5,
                        }}>
                        <TextAtom text={data} />
                        <Icon name="chevron-forward" />
                      </Pressable>
                    );
                  })
                : null}
            </ScrollView>
          </View>
        </View>
      </Modal>
      <HeaderMolecule title="Assigned To Me">
        <FIcon
          name="sync-alt"
          color={WHITE}
          size={20}
          onPress={fetchData}
          style={{paddingHorizontal: SCALE_10}}
        />
        <FIcon
          name="map-marked"
          color={WHITE}
          size={20}
          onPress={() =>
            navigation.navigate('Map', {
              data: initial,
            })
          }
          style={{paddingHorizontal: SCALE_10}}
        />
      </HeaderMolecule>
      <View
        style={{
          flexDirection: 'row',
          padding: SCALE_10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: SCALE_40,
            width: '70%',
            borderRadius: SCALE_5,
            paddingHorizontal: SCALE_15,
            backgroundColor: WHITE,
          }}>
          <Icon name="search" color={GRAY} size={SCALE_20} />
          <TextInput
            style={{paddingLeft: SCALE_10, color: BLACK}}
            placeholderTextColor={GRAY}
            value={search}
            onChangeText={text => searchFilter(text)}
            placeholder="Search Task"
          />
        </View>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: PRIMARY,
            padding: SCALE_10,
            borderRadius: SCALE_5,
          }}
          onPress={() => setModal(true)}>
          <TextAtom
            style={{paddingHorizontal: SCALE_5, color: WHITE}}
            text="Filter"
          />
          <Icon name="funnel-outline" color={WHITE} size={SCALE_20} />
        </Pressable>
      </View>
      {loading ? (
        <LoadingAtom />
      ) : data.length !== 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item: Data) => item.id.toString()}
          renderItem={item => <ListMolecule item={item.item} />}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={fetchData} />
          }
          removeClippedSubviews={true}
          initialNumToRender={10}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={100}
          windowSize={7}
        />
      ) : error !== null ? (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TextAtom
            style={{color: BLACK, fontSize: FONT_SIZE_30}}
            text="Error While Loading"
          />
        </View>
      ) : null}
    </View>
  );
};

export default Active;

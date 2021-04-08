import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Active from 'src/screens/Active/Active';
import Completed from 'src/screens/Completed';
import Map from 'src/screens/Active/Map';
import Profile from 'src/screens/Profile';
import Settings from 'src/screens/Settings';
import {GRAY, PRIMARY} from 'src/styles/colors';
import {SCALE_3, SCALE_5} from 'src/styles/spacing';

interface LayoutProps {}

export type StackParamsList = {
  Home: any;
  Map: {data: Data[]};
};
export type TabParamsList = {
  Active: any;
  Completed: any;
  Settings: any;
  Profile: any;
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator<TabParamsList>();

const Bottomtab = () => {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      tabBarOptions={{
        activeTintColor: PRIMARY,
        inactiveTintColor: GRAY,
        tabStyle: {
          backgroundColor: 'transparent',
          paddingVertical: SCALE_3,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Active',
          tabBarIcon: ({size, color}) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}
        name="Active"
        component={Active}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Completed',
          tabBarIcon: ({size, color}) => (
            <Icon name="checkmark-circle" size={size} color={color} />
          ),
        }}
        name="Completed"
        component={Completed}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({size, color}) => (
            <Icon name="settings-outline" size={size} color={color} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({size, color}) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const Layout: React.FC<LayoutProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackground: props => (
            <LinearGradient
              {...props}
              colors={['#FF8000', '#FEB83B']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[StyleSheet.absoluteFill]}
            />
          ),
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Bottomtab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Map"
          component={Map}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;

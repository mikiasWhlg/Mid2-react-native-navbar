import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/Contact';
import AboutScreen from './screens/About';

//Screen names
const homeName = "Home";
const contactName = "Contact";
const aboutName = "About us";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
 
            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === contactName) {
              iconName = focused ? 'call'  : 'call-outline';

            } else if (rn === aboutName) {
              iconName = focused ? 'information' : 'information-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'Tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 13},
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={contactName} component={ContactScreen} />
        <Tab.Screen name={aboutName} component={AboutScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
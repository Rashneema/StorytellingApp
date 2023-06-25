/*
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

//CLASS 86 - T.A
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
*/
//Class 88

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

//CLASS 86 - T.A
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={StackNavigator} options={{ unmountOnBlur: true }}/>
      <Drawer.Screen name="Profile" component={Profile} options={{ unmountOnBlur: true }} />
      {/*CLASS 86 -T.A*/}
      <Drawer.Screen name="Logout" component={Logout} options={{ unmountOnBlur: true }}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
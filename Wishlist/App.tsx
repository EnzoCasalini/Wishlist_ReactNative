import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import FriendListView from "./src/views/FriendList.view";
import 'react-native-gesture-handler';
import SignInView from "./src/views/SignIn.view";
import SignUpView from "./src/views/SignUp.view";
import HomeSignedView from "./src/views/HomeSigned.view";
import CustomDrawerContent from "./src/Component/CustomDrawerContent";
import Ionicons from "react-native-vector-icons/Ionicons";
import WishlistView from "./src/views/Wishlist.view";
import ListView from "./src/views/List.view";


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#3D3B46',
                    width: 280,
                },
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#545160',
                },
                headerShadowVisible: false,
                drawerActiveBackgroundColor: '#C9B6E9',
                drawerInactiveTintColor: '#bdbdbd',
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: {
                    marginLeft: -25
                },
            }}
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={HomeSignedView}
                           options={{
                               drawerIcon: ({color}) => (
                                   <Ionicons name={'home-outline'} size={22} color={color}/>
                               )
                           }}
            />
            <Drawer.Screen name="Wish" component={WishlistView}
                           options={{
                               drawerIcon: ({color}) => (
                                   <Ionicons name={'book-outline'} size={22} color={color}/>
                               )
                           }}
            />
            <Drawer.Screen name="FriendList" component={FriendListView}
                           options={{
                               drawerIcon: ({color}) => (
                                   <Ionicons name={'people-outline'} size={22} color={color}/>
                               )
                           }}
            />
        </Drawer.Navigator>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SignIn"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="SignIn" component={SignInView}/>
                <Stack.Screen name="SignUp" component={SignUpView}/>
                <Stack.Screen name="HomeSigned" component={MyDrawer}/>
                <Stack.Screen name="List" component={ListView}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
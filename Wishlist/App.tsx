import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProfileView from "./src/views/Profile";
import FriendListView from "./src/views/FriendList.view";
import 'react-native-gesture-handler';
import SignInView from "./src/views/SignIn.view";
import SignUpView from "./src/views/SignUp.view";
import HomeSignedView from "./src/views/HomeSigned";


const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation>
            <Drawer.Screen name="Home" component={HomeSignedView} />
            <Drawer.Screen name="Profile" component={ProfileView} />
            <Drawer.Screen name="FriendList" component={FriendListView} />
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInView from "./src/views/SignIn.view";
import SignUpView from "./src/views/SignUp.view";
import HomeUnsignedView from "./src/views/HomeUnsigned.view";

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn"
                             screenOptions={{
                                 headerShown: false
                             }}
            >
                <Stack.Screen name="SignIn" component={SignInView}/>
                <Stack.Screen name="SignUp" component={SignUpView}/>
                <Stack.Screen name="HomeUnsigned" component={HomeUnsignedView}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

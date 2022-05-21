import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    SafeAreaView,
    Image,
    KeyboardAvoidingView, TouchableOpacity, ScrollView
} from "react-native";
import React from "react";
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {authentication} from "../../firebase/firebase";
import Contact from "../Component/Contact";


const ProfileView = ({navigation}): React.ReactElement => {

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>My events</Text>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3D3B46',
        height: '100%',
        width: '100%',
        color: '#fff',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 15,
        paddingTop: 20,
        color: '#fff',
    },
});

export default ProfileView;
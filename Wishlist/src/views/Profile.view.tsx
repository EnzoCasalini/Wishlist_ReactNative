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


const ProfileView = ({navigation}): React.ReactElement => {




    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <ScrollView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleSignOut}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    },
    button: {
        backgroundColor: '#992DF2',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
});


export default ProfileView;
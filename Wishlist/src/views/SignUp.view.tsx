import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    SafeAreaView,
    Image,
    KeyboardAvoidingView, TouchableOpacity
} from "react-native";
import React from "react";


const SignUpView = ({navigation}): React.ReactElement => {

    const [mail, setMail] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [confirmPwd, setConfirmPwd] = React.useState("");


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Image
                source={{
                    uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
                }}
                style={{width: "100%", height: 250}}
            />
            <Text style={styles.title}>Inscrivez-vous 📝️</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>EMAIL *</Text>
                <TextInput
                    placeholder="Email"
                    value={mail}
                    onChangeText={text => setMail(text)}
                    style={styles.input}
                />
                <Text style={styles.inputText}>PASSWORD *</Text>
                <TextInput
                    placeholder="Password"
                    value={pwd}
                    onChangeText={text => setPwd(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.inputText}>CONFIRM PASSWORD *</Text>
                <TextInput
                    placeholder="Password"
                    value={confirmPwd}
                    onChangeText={text => setConfirmPwd(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('SignUp') }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 40,
    },
    inputContainer : {
        width: '80%',
        marginTop: 40,
    },
    input: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
    },
    inputText: {
        color: 'grey',
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 2,
    },
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


export default SignUpView;
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    KeyboardAvoidingView, TouchableOpacity
} from "react-native";
import React, {useEffect} from "react";
import {authentication} from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const SignInView = ({navigation}): React.ReactElement => {

    const [mail, setMail] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [isSigned, setIsSigned] = React.useState(false);


    useEffect(() => {
        authentication.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('HomeSigned');
            }
        })
    }, [])


    const handleSignIn = () =>  {
        signInWithEmailAndPassword(authentication, mail, pwd)
            .then((re) => {
                setIsSigned(true);
                if (isSigned)
                {
                    setPwd("");
                    setMail("");
                    navigation.navigate('HomeSigned');
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }


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
            <Text style={styles.title}>Connectez-vous 🙋‍♀️</Text>
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
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleSignIn}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('SignUp') }}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.OutlineText}>Register</Text>
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
        marginTop: 50,
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
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 15,
        borderColor: '#992DF2',
        borderWidth: 2,
    },
    OutlineText: {
        color: '#992DF2',
        fontWeight: '700',
        fontSize: 16,
    },
    link: {
        color: 'blue',
        marginTop: 20,
    }

});


export default SignInView;
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
import React, {useEffect} from "react";
import Contact from "../Component/Contact";
import WishesList from "../Component/WishesList";


const FriendListView = ({ navigation }): React.ReactElement => {

    const [api, setApi] = React.useState({});

    async function getInfosFromApi() {
        try {
            const response = await fetch('http://localhost:8080/?url=https%3A%2F%2Fwww.amazon.fr%2FApple-AirPods-Pro-Reconditionn%25C3%25A9%2Fdp%2FB08TJ2LGB8%2Fref%3Dsr_1_8%3Fkeywords%3Dairpods%26qid%3D1653138875%26sr%3D8-84/');
            const data = await response.json(); // On récupère les infos de l'API.
            console.log(data);

            setApi(data); // On set les infos de l'épisode dans notre state.
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getInfosFromApi().then(() => {
            console.log(api)
        });
    }, []);

    function test() {
        console.log(api);
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <ScrollView>
                <View style={styles.friendContainer}>
                    <TouchableOpacity onPress={test}>
                        <Text>Click Me Boy !</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
});


export default FriendListView;
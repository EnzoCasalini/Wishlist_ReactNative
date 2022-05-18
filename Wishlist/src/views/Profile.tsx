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
import Contact from "../Component/Contact";
import WishesList from "../Component/WishesList";
import {Wish} from "../bdd/Wish";


const ProfileView = ({navigation}): React.ReactElement => {

    const user = {
        name: 'Enzo Casalini',
        icon : 'https://via.placeholder.com/300/09f/fff.png',
        status: true,
    }

    let wish: Wish[] = [
        {
            id: 1,
            name: "Test super méga long je suis chiant",
            icon: 'https://via.placeholder.com/300/09f/fff.png',
            description: 'Bonjour je suis agaçant et je décide donc d\'écrire énormément sans raison valable',
            url: 'osef',
        },
        {
            id: 2,
            name: "Armoire Darty",
            icon: 'https://via.placeholder.com/300/09f/fff.png',
            description: 'Armoire de haute qualité',
            url: 'osef',
        },
    ];

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <ScrollView>
                <View style={styles.friendContainer}>
                    <Text style={styles.title}>Profile</Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
});


export default ProfileView;
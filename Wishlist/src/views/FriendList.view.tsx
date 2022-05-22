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


const FriendListView = ({ route, navigation }): React.ReactElement => {

    const {username} = route.params;

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <ScrollView>
                <View style={styles.friendContainer}>
                    <Text>{username}</Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
});


export default FriendListView;
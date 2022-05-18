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

interface ContactProps {
    name: string;
    icon: string;
    status: boolean;
}

const Contact: React.FC<ContactProps> = (props: ContactProps) => {

    function checkStatus(status:boolean) {
        if (status == true)
        {
            return(<Text style={styles.active}>● Active</Text>)
        }
        else {
            return(<Text style={styles.offline}>● Offline</Text>)
        }
    }

    return (
        <View style={styles.friendContainer}>
            <Image
                source={{
                    uri: props.icon,
                }}
                style={styles.icon}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{props.name}</Text>
                {checkStatus(props.status)}
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    friendContainer: {
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: 'center',
        flexDirection: 'row',
        height: 110,
        width: '90%',
        paddingLeft: 10,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: '#FFE9F3',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    infoContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        marginLeft: 10,
        height: '50%',
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    active: {
        fontSize: 14,
        color: '#00AF54',
    },
    offline: {
        fontSize: 14,
        color: 'grey',
    },
});

export default Contact;

import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Image } from 'react-native';
import React from "react";

interface ContactProps {
    name: string;
    icon: string;
    status: boolean;
}

const Contact: React.FC<ContactProps> = (props: ContactProps) => {

    function checkStatus(status:boolean) {
        if (status)
        {
            return(<Text style={styles.active}>● Active</Text>)
        }
        else {
            return(<Text style={styles.offline}>● Offline</Text>)
        }
    }

    return (
            <TouchableOpacity style={styles.friendContainer}>
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
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    friendContainer: {
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: 'center',
        flexDirection: 'row',
        height: 110,
        width: '95%',
        paddingLeft: 10,
        borderRadius: 8,
        borderColor: 'black',
        marginBottom: 10,
        backgroundColor: '#545160',
        // Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
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
        color: '#E5E5E5',
    },
    active: {
        fontSize: 14,
        color: '#C9B6E9',
    },
    offline: {
        fontSize: 14,
        color: '#b0b0b0',
    },
});

export default Contact;
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

interface Wish {
    image: string,
    name: string,
    price: number,
}

const WishesList: (props: Wish) => JSX.Element[] = (props: Wish) => {

    function checkNameLength(name:string) {
        if (name.length > 18)
            return name.slice(0, 15) + '...';
        else
            return name;
    }

    return (
        <View style={styles.wishContainer} key={props.name}>
            <Image
                source={{
                    uri: props.image,
                }}
                style={styles.icon}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{checkNameLength(props.name)}</Text>
                <Text style={styles.description}>{props.price}</Text>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    wishContainer: {
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
        marginTop: 20,
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    infoContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        marginLeft: 10,
        height: '60%',
        width: '50%',
        flexWrap: "nowrap",
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
});

export default WishesList;
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
import {Wish} from "../bdd/Wish";

interface WishesProps {
    wishes: Wish[],
}

const WishesList: (props: WishesProps) => JSX.Element[] = (props: WishesProps) => {

    function checkDescriptionLength(description:string) {
        if (description.length > 53)
            return description.slice(0, 50) + '...';
        else
            return description;
    }

    function checkNameLength(name:string) {
        if (name.length > 18)
            return name.slice(0, 15) + '...';
        else
            return name;
    }

    return (
        props.wishes.map((wish => {
            return(
                <View style={styles.wishContainer}>
                    <Image
                        source={{
                            uri: wish.icon,
                        }}
                        style={styles.icon}
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{checkNameLength(wish.name)}</Text>
                        <Text style={styles.description}>{checkDescriptionLength(wish.description)}</Text>
                    </View>
                </View>
            )
        }))
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
    description: {

    },
});

export default WishesList;
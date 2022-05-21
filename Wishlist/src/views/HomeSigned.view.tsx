import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    KeyboardAvoidingView, TouchableOpacity, SafeAreaView, FlatList, ScrollView
} from "react-native";
import React, {useEffect} from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contact from "../Component/Contact";
import {authentication} from "../../firebase/firebase";



const HomeSignedView = ({navigation}): React.ReactElement => {

    useEffect(() => {
        authentication.onAuthStateChanged(user => {
            if (!user) {
                navigation.navigate('SignIn');
            }
        })
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>My events</Text>
            </View>
            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={styles.eventsButton}>
                        <Image
                            source={require("../../assets/img/Birthday.png")}
                            style={styles.eventsImage}
                        />
                        <Text style={styles.eventsText}>Birthday</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eventsButton}>
                        <Image
                            source={require("../../assets/img/Womens.png")}
                            style={styles.eventsImage}
                        />
                        <Text style={styles.eventsText}>Women's Day</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eventsButton}>
                        <Image
                            source={require("../../assets/img/NewYear.png")}
                            style={styles.eventsImage}
                        />
                        <Text style={styles.eventsText}>New year</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.eventsButton}>
                        <Image
                            source={require("../../assets/img/Womens.png")}
                            style={styles.eventsImage}
                        />
                        <Text style={styles.eventsText}>Wedding</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View>
                <Text style={styles.title}>My wishes</Text>
            </View>
            <View style={styles.wishesContainer}>
                <TouchableOpacity style={styles.wishButton}>
                    <Text style={styles.wishText}>Wedding</Text>
                    <Text style={styles.wishTextBig}>500$</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.title}>My Friends</Text>
                <View style={styles.friendsContainer}>
                    <Contact name={'Romain au cul'} icon={'https://reactnative.dev/img/tiny_logo.png'} status={true}/>
                    <Contact name={'Enzo ophile'} icon={'https://reactnative.dev/img/tiny_logo.png'} status={true}/>
                    <Contact name={'Chandler ou minute'} icon={'https://reactnative.dev/img/tiny_logo.png'} status={false}/>
                    <Contact name={'Gwendal hal'} icon={'https://reactnative.dev/img/tiny_logo.png'} status={true}/>
                    <Contact name={'Andreas demain'} icon={'https://reactnative.dev/img/tiny_logo.png'} status={true}/>
                </View>
            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3D3B46',
        height: '100%',
        width: '100%',
        color: '#fff',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 15,
        paddingTop: 20,
        color: '#fff',
    },
    eventsImage : {
        width: 100,
        height: 100,
        borderRadius: 90,
    },
    eventsButton: {
        flexShrink : 1,
        marginTop: 20,
        paddingLeft: 15,
    },
    eventsText: {
        fontSize: 15,
        marginTop: 5,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '500',
    },
    wishesContainer: {
        marginTop: 20,
        height: 225,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#545160',
        justifyContent: 'flex-end',
        borderRadius: 8,
    },
    wishButton: {
        width: '95%',
        height: 70,
        backgroundColor: '#C9B6E9',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 8,
        borderRadius: 8,
    },
    wishText: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: 15,
        color: '#333333',
    },
    wishTextBig: {
        fontSize: 25,
        marginLeft: 15,
        color: '#333333',
        fontWeight: 'bold',
    },
    friendsContainer: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 10,
    }
});

export default HomeSignedView;
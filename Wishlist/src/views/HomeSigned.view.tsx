import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    KeyboardAvoidingView, TouchableOpacity, SafeAreaView, FlatList, ScrollView
} from "react-native";
import React, {useEffect} from "react";
import Contact from "../Component/Contact";
import {authentication, db} from "../../firebase/firebase";
import {collection, getDocs, query, where} from "firebase/firestore";
import { getAuth } from "firebase/auth";


const HomeSignedView = ({navigation}): React.ReactElement => {

    const [lists, setLists] = React.useState([]);
    const [users, setUsers] = React.useState([]);
    const auth = getAuth();

    function getLists() {
        getDocs(collection(db, "list")).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                setLists(list => list.concat(doc.data()));
            });
        });
    }

    function getUsers() {
        const q = query(collection(db, "users"), where( "uid", "!=", auth.currentUser.uid));
        getDocs(q).then((querySnapshot => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                setUsers(user => user.concat(doc.data()));
            });
        }));
    }

    useEffect(() => {
        getLists();
        getUsers();
        authentication.onAuthStateChanged(user => {
            if (!user) {
                navigation.navigate('SignIn');
            }
        })
    }, []);


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
                    {lists.map(list => {
                        if (list == null)
                        {
                            return(
                                <Text>No Lists</Text>
                            )
                        }
                        else {
                            return(
                                <TouchableOpacity style={styles.eventsButton} onPress={() => {
                                    navigation.navigate('List', {listName: list.name});
                                }} key={list.name}>
                                    <Image
                                        source={require("../../assets/img/Birthday.png")}
                                        style={styles.eventsImage}
                                    />
                                    <Text style={styles.eventsText}>{list.name}</Text>
                                </TouchableOpacity>
                            )
                        }
                    })}
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
                    {users.map(user => {
                        if (user == null)
                        {
                            return(
                                <Text>No Users</Text>
                            )
                        }
                        else {
                            return(
                                <Contact name={user.username} icon={'https://reactnative.dev/img/tiny_logo.png'} status={true}
                                onPress={() => {
                                    navigation.navigate('FriendList', {username: user.username});
                                }} key={user.uid}/>
                            )
                        }
                    })}
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
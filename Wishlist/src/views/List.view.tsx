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
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase/firebase";
import WishesList from "../Component/WishesList";
import { getAuth } from "firebase/auth";


const ListView = ({ route, navigation }): React.ReactElement => {

    const [wishes, setWishes] = React.useState([]);
    const {listName} = route.params;
    const auth = getAuth();


    function getWishes() {
        const q = query(collection(db, "wishes"), where("list", "==", listName), where( "uid", "==", auth.currentUser.uid));
        getDocs(q).then((querySnapshot => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setWishes(wishes => wishes.concat(doc.data()));
            });
        }));
    }

    useEffect(()=> {
        getWishes();
    }, []);


    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>{listName}</Text>
            </View>
            <View style={styles.wishesContainer}>
                {wishes.map(wish => {
                    if (wish == null)
                    {
                        return(
                            <Text>No wishes</Text>
                        )
                    }
                    else {
                        return(
                            <WishesList name={wish.name} image={wish.image} price={wish.price} key={wish.name}/>
                        )
                    }
                })}
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
    wishesContainer: {
        display: "flex",
        alignItems: "center",
    },
});

export default ListView;
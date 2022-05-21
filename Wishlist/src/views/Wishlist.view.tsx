import {
    View,
    Text,
    StyleSheet,
    ScrollView, TouchableOpacity,
} from "react-native";
import React, {useEffect} from "react";
import { db } from "../../firebase/firebase";
import { query, where, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import WishesList from "../Component/WishesList";


const WishlistView = ({navigation}): React.ReactElement => {

    const [wishes, setWishes] = React.useState([]);
    const auth = getAuth();


    function getWishes() {
        setWishes([]);
        const q = query(collection(db, "wishes"), where("user", "==", auth.currentUser.uid));
        getDocs(q).then((querySnapshot => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setWishes(wishes => wishes.concat(doc.data()));
            });
        }));
    }

    useEffect(() => {
        getWishes();
    }, []);


    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>My wishes</Text>
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
            <View>
                <TouchableOpacity onPress={getWishes}>
                    Click me !
                </TouchableOpacity>
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
});

export default WishlistView;
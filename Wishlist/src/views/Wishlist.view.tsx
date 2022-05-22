import {
    View,
    Text,
    StyleSheet,
    ScrollView, TouchableOpacity, TextInput,
} from "react-native";
import React, {useEffect} from "react";
import { db } from "../../firebase/firebase";
import { query, where, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import WishesList from "../Component/WishesList";
import { Button } from "../Component/Button";
import { Modal } from "../Component/Modal";
import {getPageInfos} from "../Scraping/scraper";

const WishlistView = ({navigation}): React.ReactElement => {

    const [wishes, setWishes] = React.useState([]);
    // Pop-up formulaire :
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [url , setUrl] = React.useState('');
    const auth = getAuth();


    const popUpModal = () => {
        setIsModalVisible(() => !isModalVisible);
    }

    const addWish = () => {
        setIsModalVisible(() => !isModalVisible);
        getWishes();
    }


    function getWishes() {
        setWishes([]);
        const q = query(collection(db, "wishes"), where("uid", "==", auth.currentUser.uid));
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
                <TouchableOpacity onPress={popUpModal}><Text>Make it pop!</Text></TouchableOpacity>
                <Modal isVisible={isModalVisible}>
                    <Modal.Container>
                        <View style={styles.modal}>
                            <Modal.Header title="Create a wish by adding the url of the item !" />
                            <Modal.Body>
                                <TextInput
                                    style={styles.input}
                                    placeholder="url"
                                    onChangeText={url => setUrl(url)}
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <View style={styles.button}>
                                    <Button title="Cancel" onPress={popUpModal} />
                                    <Button title="Add" onPress={addWish} />
                                </View>
                            </Modal.Footer>
                        </View>
                    </Modal.Container>
                </Modal>
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
    text: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    input: {
        paddingTop: 10,
        borderColor: "grey",
        borderBottomWidth: 2,
    },
    button: {
        width: "100%",
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
    },
    modal: {
        width: "100%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default WishlistView;
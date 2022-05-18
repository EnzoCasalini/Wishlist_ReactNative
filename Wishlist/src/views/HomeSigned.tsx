import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    KeyboardAvoidingView, TouchableOpacity, SafeAreaView, FlatList, ScrollView
} from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';



const Profile = ({navigation}): React.ReactElement => {

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={styles.container}
        >
            <View>
                <Text style={styles.title}>My events</Text>
            </View>
            <View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={styles.eventsButton}>
                        <Image
                            source={{
                                uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
                            }}
                            style={styles.eventsImage}
                        />
                        <Text style={styles.eventsText}>Birthday</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={styles.eventsButton}>
                        <Image
                            source={{
                                uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
                            }}
                            style={styles.eventsImage}
                        />
                        <Text style={styles.eventsText}>Women's Day</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={styles.eventsButton}>
                        <Image
                            source={{
                                uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
                            }}
                            style={styles.eventsImage}
                        />
                        <Text style={styles.eventsText}>New year</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={styles.eventsButton}>
                        <Image
                            source={{
                                uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
                            }}
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
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={styles.wishButton}>
                    <Text style={styles.wishText}>Wedding</Text>
                    <Text style={styles.wishTextBig}>500$</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.title}>My Friends</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={styles.eventsButton}>
                    <Image
                        source={{
                            uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
                        }}
                        style={styles.eventsImage}
                    />
                    <Text style={styles.eventsText}>Birthday</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={styles.eventsButton}>
                    <Image
                        source={{
                            uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
                        }}
                        style={styles.eventsImage}
                    />
                    <Text style={styles.eventsText}>Women's Day</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={styles.eventsButton}>
                    <Image
                        source={{
                            uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
                        }}
                        style={styles.eventsImage}
                    />
                    <Text style={styles.eventsText}>New year</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} style={styles.eventsButton}>
                    <Image
                        source={{
                            uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
                        }}
                        style={styles.eventsImage}
                    />
                    <Text style={styles.eventsText}>Wedding</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 15,
        paddingTop: 30,
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
        color: '#333333',
    },
    wishesContainer: {
        marginTop: 20,
        height: 200,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#992DF2',
        justifyContent: 'flex-end',
        borderRadius: 8,
    },
    wishButton: {
        width: '95%',
        height: 70,
        backgroundColor: '#ffffff',
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
});

export default Profile;
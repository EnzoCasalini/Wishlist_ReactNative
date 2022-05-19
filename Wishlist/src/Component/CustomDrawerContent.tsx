import {
    DrawerContentScrollView, DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';

import React from "react";
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export function CustomDrawerContent(props) {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{backgroundColor: '#545160'}}>
                <View style={{padding: 20}}>
                    <Image source={require('../../assets/img/Womens.png')} style={styles.ProfileImage} />
                    <Text style={styles.title}>John Doe</Text>
                    <Text style={styles.section}>
                        <Text style={[styles.caption, styles.paragraph]}>80</Text>
                        <Text style={styles.caption}> Following</Text>
                    </Text>
                </View>
                <View style={{backgroundColor: '#3D3B46', flex: 1, paddingTop: 10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{padding:20, borderTopWidth:1, borderTopColor:'#7e7e7e'}}>
                {/*<TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="share-social-outline" size={22} color={'#fff'}/>
                        <Text style={{marginLeft: 5, fontSize:15, color:'#fff'}}>Tell a Friend</Text>
                    </View>
                </TouchableOpacity>*/}
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:5}} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="exit-outline" size={22} color={'#fff'}/>
                        <Text style={{marginLeft: 5, fontSize:15, color:'#fff'}}>Signed Out</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ProfileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    section: {
        flexDirection: 'row',
    },
    title: {
        color: '#f8f8f8',
        fontSize: 18,
        fontWeight: '700',
    },
    caption: {
        color: '#f8f8f8',
        fontWeight: '400',
    },
    paragraph : {
        fontWeight: '500',
    }

});

export default CustomDrawerContent;
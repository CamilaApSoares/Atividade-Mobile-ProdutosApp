import React from "react";
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';

export default function ProductCard({avatar, name, price}){
    return(
        
        <View style={styles.card}>
            <Image source={avatar} style={styles.avatar}/>
            <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 12,
        backgroundColor: "#fbf9ff",
        margin: 15,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

    avatar:{
        width: 60,
        height: 60,
        borderRadius:30,
    },

    info:{
        marginLeft: 16,
        justifyContent: "center",
    },

    name: {
        fontSize: 18,
        fontWeight: '600',  
        shadowColor: '#171717',
    },

    price:{
        color: "gray",
        fontWeight: "500"
    },
});
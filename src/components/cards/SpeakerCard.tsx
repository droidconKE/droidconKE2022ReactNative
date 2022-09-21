import React from "react";
import {Image , View , TouchableOpacity , Text, StyleSheet} from "react-native"
const placeholder = require("../../assets/icon.png")

export default function () : JSX.Element {
    return (
        <View style={styles.container}>
            <Image source={placeholder} style={styles.image} />
            <Text style={styles.title}>Harun Wangereka</Text>
            <Text style={styles.content}>Kenya Partner Lead at droidcon Berlin | Android | Kotlin | Flutter | C++</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>
                    SESSION
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1 ,
        backgroundColor : "#F5F5F5",
        alignItems : "center"
    },
    image : {
        borderColor : "#00E2C3",
        borderWidth : 2,
        height : 109,
        width : 109,
        margin : 20
    } ,
    title : {
        color : "#000CEB",
        marginBottom : 10
    } ,
    content : {
        textAlign : "center",
        marginBottom : 10
    } ,
    button : {
        width : 143,
        height : 45,
        borderColor : "#7DE1C3",
        borderRadius : 5 ,
        borderWidth : 2 ,
        alignContent : "center",
        justifyContent : "center",
        marginBottom : 10
    } ,
    buttontext : {
        color : "#7DE1C3",
        textAlign : "center",
    }
})
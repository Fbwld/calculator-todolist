import * as React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA0A0',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    texttitle:{
        width: "500px",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "28px",
        color: "#FFFFFF",
        marginBottom: "40px",
        textAlign:"center"
    },
    text:{
        width: "29px",
        height: "59px",
        fontWeight: "700",
        fontSize: "50px",
        lineHeight: "59px",
        color: "#FFFFFF",
        
    },
    button:{
        backgroundColor: "#930707",
        height: 45,
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        marginBottom:"10px",
        padding: 10,
    },
    textbtn:{
        color: "#FFFFFF",
        fontSize:"20px"
    },
});



export default function Home({ navigation }) {
return (
    <View style={styles.container}>

        <Text style={styles.texttitle}>
            Hi, I'm Febi Wulandari
        </Text>
        <TouchableOpacity
            onPress={() => navigation.navigate("Calculator")}
            style={styles.button}
            >
            <Text style={styles.textbtn}>Calculator App</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate("Todo")}
            style={styles.button}
            >
            <Text style={styles.textbtn}>Todo List App</Text>
        </TouchableOpacity>
    </View>
    );
}

import React from "react";
import {
    View, 
    Text,
    StyleSheet,
} from "react-native";
import Home from "../components/Home";
import ImgHi from "../components/ImgHi";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA0A0',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:"150px",
        paddingBottom:"150px"
    },
    imagestyle: {
        paddingTop: '100px',
    },
});

const MainPages = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ImgHi style={{ paddingTop:"100px"}} />
            <Home navigation={navigation}/>
        </View>
    )
}

export default MainPages;
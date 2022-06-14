import React from "react";
import {View, StyleSheet} from "react-native";
import CalculatorBody from "../components/CalculatorBody";

const Calculator = () => {
    return(      
        <View style={styles.container}>  
            <CalculatorBody/>
        </View>
    )
}

const styles = StyleSheet.create({
        // container: {
        //     flexDirection : "row",
        //     flex: 1,
        //     backgroundColor: '#FFA0A0',
        //     alignItems: 'center',
        //     height : "700px",
        //   },
});

export default Calculator;
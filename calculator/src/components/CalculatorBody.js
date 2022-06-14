import React, {useState} from "react";
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
        width: "100px",
        fontWeight: "700",
        fontSize: "24px",
        lineHeight: "28px",
        color: "#FFFFFF",
        marginBottom: "11px",
        marginTop: "10px",
    },
    input:{
        width: "350px",
        height: "90px",
        backgroundColor: "#ECECEC",
        borderRadius: "10px",
        marginBottom: "20px",
        fontSize:"30px",
        padding : "10px",
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
        width: "80px",
        height: "80px",
        backgroundColor: "#FF5757",
        borderRadius: "10px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginRight: "10px",
        marginBottom:"10px",
    },
    btn1:{
        width: "80px",
        height: "80px",
        backgroundColor: "#930707",
        borderRadius: "10px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginRight: "10px",
        marginBottom:"10px",
    },
    btn2:{
        width: "170px",
        height: "80px",
        backgroundColor: "#930707",
        borderRadius: "10px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginRight: "10px",
        marginBottom:"10px",
        
    },
    view:{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",    
    },

});

export default function CalculatorBody(){
const [operation, setOperation] = useState(0);
const [result, setResult] = useState(null);

const insertNumber = (value) => {
    if (operation === 0) {
setOperation(value);
    } else {
        setOperation(operation + "" + value);
    }
};

const erase = () => {
    setOperation(operation.slice(0, -1));
};

const insertOperator = (value) => {
    setOperation(operation + "" + value);
};

const countResult = () => {
    let count = eval(operation);
    setResult(count);
};


    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.texttitle}>
                    Display
                </Text>
                <Text style={styles.input}>{result ? result : operation }</Text>
                {/* <Text style={styles.input}>{result}</Text> */}
            </View>
            <View style={styles.view}>
                <TouchableOpacity style={styles.button} 
                onPress={() => insertNumber(1)}>
                    <Text style={styles.text}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={() => insertNumber(2)}>
                    <Text style={styles.text}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn1}
                onPress={() => insertNumber('-')}>
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.btn1}
                onPress={() => insertNumber('+')}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view}>
                <TouchableOpacity style={styles.button}
                onPress={() => insertNumber(3)}>
                    <Text style={styles.text}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={() => insertNumber(4)}>
                    <Text style={styles.text}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn1}
                onPress={() => insertNumber('/')}>
                    <Text style={styles.text}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn1}
                onPress={() => insertNumber('*')}>
                    <Text style={styles.text}>*</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view}>
                <TouchableOpacity style={styles.button}
                onPress={() => insertNumber(5)}>
                    <Text style={styles.text}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={() => insertNumber(6)}>
                    <Text style={styles.text}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn1}
                onPress={() => insertNumber('%')}>
                    <Text style={styles.text}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn1}
                onPress={() => countResult()}>
                    <Text style={styles.text}>=</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view}>
                <TouchableOpacity style={styles.button}
                onPress={() => insertNumber(7)}>
                    <Text style={styles.text}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={() => insertNumber(8)}>
                    <Text style={styles.text}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={() => insertNumber(9)}>
                    <Text style={styles.text}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={() => insertNumber(0)}>
                    <Text style={styles.text}>0</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view}>
                <TouchableOpacity style={styles.btn2}
                onPress={() => erase()}>
                    <Text style={styles.text}>⌫</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}
                onPress={() => {
                    setOperation(0);
                    setResult(null);
                }}>
                    <Text style={styles.text}>C</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

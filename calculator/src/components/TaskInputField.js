import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import API from '../../config/api';

    const TaskInputField = (props) => {
    const [task, setTask] = useState();

    const handleAddTask = async(value) => {
        props.addTask(value);

        const respone = await API.post("/posts", {name:task})
        setTask(null);
    }

    return (
        <>
        <KeyboardAvoidingView
            style={styles.container}
            >
        <TextInput style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={'Write a task'} placeholderTextColor={'#930707'}/>
        <TouchableOpacity onPress={() => handleAddTask(task)}>
            <View style={styles.button}>
                <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
            </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        // borderColor: '#930707',
        // backgroundColor: '#ECECEC',
        // borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
        marginTop:30
    },
    inputField: {
        color: '#930707',
        backgroundColor: '#ECECEC',
        height: 50,
        flex: 1,
        width: 290,
        borderRadius: 10,
        marginRight:5,
        marginTop:100
    },
    button: {
        height: 30,
        width: 60,
        borderRadius: 5,
        backgroundColor: '#930707',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:100
    },
});

export default TaskInputField;
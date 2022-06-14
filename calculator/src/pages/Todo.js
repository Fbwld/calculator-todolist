import React from "react";
import {View, StyleSheet, Text} from "react-native";
import TodoList from "../components/Todo";
// import TodoList from "../components/Todo";

const Todo = () => {
    return(      
        <View 
        style={styles.container}>  
            <TodoList />
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

export default Todo;
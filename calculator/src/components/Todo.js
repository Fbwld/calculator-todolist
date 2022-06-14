import React, {useEffect, useState} from 'react';
import { 
    Keyboard,
    ScrollView, 
    StyleSheet, 
    Text,
    View 
    } from 'react-native';
import TaskInputField from './TaskInputField';
import TaskItem from './TaskItem';
import API from '../../config/api';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);

    const todos = async()=>{
        const respone = await API.get("/posts")
        return setTasks(respone.data)
    }

    useEffect(()=>{
        todos()
    },[])
    const addTask = (task) => {
        console.log(task)
        if (task == null) return;
        setTasks([...tasks, task]);
        Keyboard.dismiss();
        
    }

    const deleteTask = async (deleteIndex,id) => {
    const response = await API.delete("/posts/"+id)
    setTasks(tasks.filter((value, index) => index != deleteIndex));
    }



    return (
    <View style={styles.container}>
        <Text style={styles.heading}>TODO LIST</Text>
        <ScrollView style={styles.scrollView}>
        {
            tasks.map((task, index) => {
                return (
                    <View key={index} style={styles.taskContainer}>
                <TaskItem index={index + 1} task={task.name} deleteTask={() => deleteTask(index,task?._id)}/>
            </View>
            );
        })
    }
        </ScrollView>
        <TaskInputField  addTask={addTask}/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#FFA0A0',
    },
    heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
    },
    scrollView: {
    marginBottom: 90,

    },
    taskContainer: {
    marginTop: 20,
    }
});
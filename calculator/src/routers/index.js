import React from 'react';
// import library
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//pages//
import Calculator from '../pages/Calculator';
import MainPages from '../pages/MainPages';
import Todo from '../pages/Todo';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <Stack.Navigator initialRouteName='onBoarding'  >
            <Stack.Screen  name="MainPages"
                component={MainPages}
                options={{
                    headerShown : false, 
                    headerTitle: '',
                }}/>
            <Stack.Screen  name="Calculator"
                component={Calculator}
                options={{
                    headerShown : true, 
                    headerTitle: 'calculator',
                }}/>
            <Stack.Screen  name="Todo"
                component={Todo}
                options={{
                    headerShown : true, 
                    headerTitle: 'todo',
                }}/>
        </Stack.Navigator>
    )
}

export default Navigation;
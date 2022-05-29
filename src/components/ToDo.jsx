import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/globalStyles'

export const ToDo = ({ todo, removeToDo }) => {
    const longPressHandler = () => {
        removeToDo(todo.id)
    }

    return (
        <TouchableOpacity activeOpacity={0.5} onLongPress={longPressHandler}>
            <View style={globalStyles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
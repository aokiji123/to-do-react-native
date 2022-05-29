import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { globalStyles } from '../styles/globalStyles'

export const Form = ({ onSubmit }) => {
	const [value, setValue] = useState('')

	function pressHandler() {
		if (value.trim()) {
			onSubmit(value)
			setValue('')
		} else {
			Alert.alert('Please enter a todo')
		}		
	}

	return (
		<View style={globalStyles.wrapper}>
			<TextInput
				onChangeText={text => setValue(text)}
				value={value}
				style={globalStyles.input}
				placeholder="Write your todo"
				autoCorrect={false}
			/>
			<Button onPress={pressHandler} color="blue" title="Add" />
		</View>
	)
}
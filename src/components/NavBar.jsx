import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../styles/globalStyles'

export const NavBar = ({ title }) => {
    return (
        <View style={globalStyles.nav}>
            <Text style={globalStyles.text}>{title}</Text>
        </View>
    )
}
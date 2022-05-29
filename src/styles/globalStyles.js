import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    wrapper: {
		paddingBottom: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	input: {
		width: '80%',
		borderStyle: 'solid',
		borderColor: '#000',
		borderWidth: 2,
		padding: 10,
	},

    nav: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3949ab',
        paddingTop: 20
    },

    text: {
        color: '#f1f1f1',
        fontSize: 40,
        textAlign: 'center',
    },

    width: {
        padding: 10
    },

    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 13,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 3
    },
    
    end: {
        textAlign: 'center',
        color: '#ccc',
        marginTop: 10,
        marginBottom: 200
    }
})
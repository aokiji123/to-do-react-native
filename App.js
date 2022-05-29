import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Form } from './src/components/Form'
import { NavBar } from './src/components/NavBar'
import { ToDo } from './src/components/ToDo'
import { globalStyles } from './src/styles/globalStyles'

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(prevTodos => [...prevTodos, {
      id: Date.now().toString(),
      title: title
    }])
  }

  function removeToDo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <NavBar title="To Do App!"/>

      <ScrollView style={globalStyles.width}>
        <Form onSubmit={addTodo}/>
        {todos.map(todo => <ToDo todo={todo} key={todo.id} removeToDo={removeToDo}/>)}
        <Text style={globalStyles.end}>Long Tap to delete</Text>
      </ScrollView>
    </View>
  )
}
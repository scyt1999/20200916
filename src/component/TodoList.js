import React, { useState, useStete } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView,Platform,Keyboard,Button,TouchableWithoutFeedback} from 'react-native'
import { Item, Input } from 'native-base'

import { useSelector, useDispatch} from 'react-redux';
import {addTodoList,deleteTodo,finishTodo} from '../store/action'


function TodoList() {
    const [ todoDec, setTodoDec ] =useState('')
    const todoList = useSelector(state=>state.todoList)
    const finishList = useSelector(state=>state.finishList)

    const dispatch = useDispatch()
    function isFinish(id){
        return finishList.includes(id)
    }
    function handleAddtodo(){
        dispatch(addTodoList(todoDec))
        setTodoDec('')
    }
    function handleDeleteTodo(todoIndex){
        dispatch(deleteTodo(todoIndex))
    }
    function handleFinishTodo(id){
        dispatch(finishTodo(id))
    }
    return (
        <>
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.container}>
                {todoList.map((todo,index)=>{
                    return (
                        <View key={`todo-${index}`} style={styles.todoItem}>
                            <Text style={isFinish(todo.id) && styles.finishText}>{index + 1} / {todo.todoDec}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Button onPress={()=>handleDeleteTodo(index)} title="DELETE" color="red" />
                                <Button onPress={()=>handleFinishTodo(todo.id)} title="FINISH" color="green" disabled={isFinish(todo.id)}/>
                            </View>
                        </View>
                    )
                })}
            </View>
        </TouchableWithoutFeedback>
        <KeyboardAvoidingView behavior={Platform.OS =="ios"?"padding":"height"}>
            <View style={styles.footer}>
                <Item regular>
                    <Input placeholder="請輸入事項" value={todoDec} returnKeyType="send" onSubmitEditing={handleAddtodo} onChangeText={(val)=>setTodoDec(val)}/>
                </Item>
            </View>
        </KeyboardAvoidingView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 48,
        paddingHorizontal: 16,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2
    },
    finishText: {

        textDecorationLine: 'line-through',
    
        textDecorationStyle: 'solid'
    
      },
    
      footer: {
    
        marginBottom: 36,
    
        paddingHorizontal: 16
    
      }
})

export default TodoList
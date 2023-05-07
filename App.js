/* eslint-disable react-native/no-inline-styles */
import 'react-native-get-random-values';
import ListItem from './components/ListItem';
import React,{useState} from 'react';
import {StyleSheet, View, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import AddItem from './components/AddItem';
import {v4 as uuidv4} from 'uuid';
const App = () => {
  const [items,setItems]=useState([
    {id:uuidv4(),text:'Milk'},
    {id:uuidv4(),text:'Bread'},
    {id:uuidv4(),text:'Egg'},
    {id:uuidv4(),text:'Juice'},
    {id:uuidv4(),text:'Butter'},
  ]);
  const deleteItem = (id)=>{
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id !== id);
    });
  };
  const addItem = (text)=>{
    if (text === ''){
      Alert.alert('Error','Please enter an input');
    }
    else {
      setItems(prevItems=>{
        return [{id:uuidv4(),text:text},...prevItems];
      });
    }

  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList
      data={items}
      renderItem={({item}) => <ListItem deleteItem={deleteItem}  item={item} />}
      keyExtractor={item => item.id}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;

import React from 'react';
import {StyleSheet, View, FlatList, Text, Button} from 'react-native';
import Item from './Item';
import datos from './Datos'

export default class App extends React.Component {
  handlePress = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Recordatorios</Text>
        </View>
          <Button title={'Agregar'} onPress={this.handlePress()}/>
        <FlatList data={datos} renderItem={Item}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  header:{
    height: 60
  }
});

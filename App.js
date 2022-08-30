import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import Icon from "./assets/favicon.png"

export default function App() {

  const [input, setInput] = useState("")
  const [switchButton, setSwitchButton] = useState(false)

  const products = [
    {id: 1, name: "Pomme", price:45},
    {id: 2, name: "Banane", price: 12},
    {id: 3, name: "Poire", price: 11}
  ]

  const handlePress = () => {
    console.log(switchButton)
  }

  useEffect(() => {
    console.log("Démarrage composant")
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={[styles.box, styles.red]}>
        <Text>My Firt Text</Text>
        <Image source={Icon}></Image>
        <TextInput style={styles.input} value={input} onChangeText={t => setInput(t)}></TextInput>
        <Button title='Search' onPress={handlePress}></Button>
        <Switch value={switchButton} onValueChange={() => setSwitchButton(p => !p)}></Switch>
        <View style={styles.list}>
          <FlatList
            style={styles.flatList}
            data={products}
            renderItem={({item}) => (
              <View>
                <Text>{item.name} {item.price}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        {/* <Button title='My Button'></Button> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  box: {
    alignItems: "center",
    height: 500,
    alignSelf: "stretch"
  },
  red: {
    backgroundColor: "red"
  },
  input: {
    width: 100,
    backgroundColor: "white",
    padding: 0
  },
  flatList: {
    backgroundColor: "blue"
  },
  list: {
    height: 100
  }
});

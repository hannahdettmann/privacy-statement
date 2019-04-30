import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Choose Your Level of Privacy',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        onInput() {
    var input = document.getElementById("typeinp");
    var currentVal = input.value;
    this.setState({
      value: currentVal
    })
}

<input id="typeinp" type="range" min="0" max="5" step="1" defaultValue="3" onInput={return 0}/>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

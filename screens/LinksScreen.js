import React from 'react';
import { ScrollView, StyleSheet, Input, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
//import { withStyles } from '@material-ui/core/styles';
//import Slider from '@material-ui/lab/Slider';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Choose Your Level of Privacy',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.getStartedText}>
              Welcome to Safe+Driving! Here, you can choose your level 
            </Text>
      </ScrollView>
    );
  }
}

 _takeInput = () => {
    return 0;
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

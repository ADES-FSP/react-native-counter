/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, StatusBar, Text, TextInput, Button} from 'react-native';

function Counter(props) {
  return (
    <View>
      <Text>Hello</Text>
      <View>
        <Button title="+"></Button>
        <Button title="-"></Button>
      </View>
    </View>
  );
}

function PlusMinusCounter(props) {
  return (
    <View>
      <TextInput></TextInput>
      <Counter></Counter>
    </View>
  );
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <PlusMinusCounter></PlusMinusCounter>
      </View>
    </>
  );
};

export default App;

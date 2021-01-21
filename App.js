/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, StatusBar, Text, TextInput, Button} from 'react-native';

function Counter(props) {
  let [count, setCount] = useState(0);
  return (
    <View>
      <Text>{count}</Text>
      <View>
        <Button
          title="+"
          onPress={function () {
            setCount(count + 1);
          }}></Button>
        <Button
          title="-"
          onPress={function () {
            setCount(count - 1);
          }}></Button>
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

/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, StatusBar, Text, TextInput, Button} from 'react-native';

const countStyle = {
  fontSize: 100,
  textAlign: 'center',
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
};
const buttonStyle = {
  flex: 1,
  padding: 20,
};

function Counter(props) {
  const [count, setCount] = useState(0);
  const maxCount = props.maxCount;
  const onChange = props.onChange;
  return (
    <View>
      <Text style={countStyle}>{count}</Text>
      <View style={buttonContainerStyle}>
        <View style={buttonStyle}>
          <Button
            title="+"
            color="green"
            disabled={count >= maxCount}
            onPress={function () {
              setCount(count + 1);
              onChange(count + 1);
            }}></Button>
        </View>
        <View style={buttonStyle}>
          <Button
            title="-"
            color="red"
            disabled={count === 0}
            onPress={function () {
              setCount(count - 1);
              onChange(count - 1);
            }}></Button>
        </View>
      </View>
    </View>
  );
}

function PlusMinusCounter(props) {
  const [maxCount, setMaxCount] = useState(0); // destructuring. [any, fn]
  // const arr = useState(0);
  // const maxCount = arr[0];
  // const setMaxCount = arr[1];

  return (
    <View>
      <TextInput
        value={'' + maxCount}
        keyboardType="numeric"
        onChangeText={function (text) {
          setMaxCount(text);
        }}></TextInput>
      <Counter
        maxCount={maxCount}
        onChange={function (x) {
          console.info(x);
        }}></Counter>
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

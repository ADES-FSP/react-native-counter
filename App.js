/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, StatusBar, TextInput, Button, Text} from 'react-native';

const maxCountLabelStyle = {
  backgroundColor: '#222',
  color: 'white',
};
const maxCountInputStyle = {
  backgroundColor: '#333',
  color: 'white',
};
const counterContainerStyle = {
  marginTop: 50,
};
const counterStyle = {
  textAlign: 'center',
  fontSize: 100,
};
const buttonsStyle = {
  display: 'flex',
  flexDirection: 'row',
};
const buttonStyle = {
  padding: 15,
  flex: 1,
};

function Counter(props) {
  const [count, setCount] = useState(0);
  const {maxCount} = props;
  return (
    <View>
      <Text style={counterStyle}>{count}</Text>
      <View style={buttonsStyle}>
        <View style={buttonStyle}>
          <Button
            color={'#28D37D'}
            title="+"
            disabled={count >= maxCount}
            onPress={function () {
              setCount(count + 1);
            }}></Button>
        </View>
        <View style={buttonStyle}>
          <Button
            color={'#FF7C6C'}
            title="-"
            disabled={count === 0}
            onPress={function () {
              setCount(count - 1);
            }}></Button>
        </View>
      </View>
    </View>
  );
}

function BoundedPlusMinus(props) {
  const [maxCount, setMaxCount] = useState(10);
  return (
    <View>
      <Text style={maxCountLabelStyle}>Max Count: </Text>
      <TextInput
        style={maxCountInputStyle}
        keyboardType="numeric"
        value={'' + maxCount}
        onChangeText={function (text) {
          setMaxCount(text);
        }}></TextInput>
      <View style={counterContainerStyle}>
        <Counter maxCount={maxCount || 0}></Counter>
      </View>
    </View>
  );
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <BoundedPlusMinus></BoundedPlusMinus>
      </View>
    </>
  );
};

export default App;

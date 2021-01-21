/**
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, StatusBar, TextInput, Button, Text} from 'react-native';

function Counter(props) {
  const [count, setCount] = useState(0);
  const {maxCount} = props;
  return (
    <View>
      <Text>{count}</Text>
      <View>
        <View>
          <Button
            color={'#28D37D'}
            title="+"
            disabled={count >= maxCount}
            onPress={function () {
              setCount(count + 1);
            }}></Button>
        </View>
        <View>
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
      <Text>Max Count: </Text>
      <TextInput
        keyboardType="numeric"
        value={'' + maxCount}
        onChangeText={function (text) {
          setMaxCount(text);
        }}></TextInput>
      <View>
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

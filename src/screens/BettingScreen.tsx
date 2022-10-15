import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Button} from '@rneui/themed';
import {useStore} from '../store';
import {BettingStoreType} from '../store/BettingStore';
import {observer} from 'mobx-react-lite';
import {alertWithSingleButton} from '../components/CustomAlert';

type BettingScreenType = {
  navigation: any;
};

const BettingScreen = observer(({navigation}: BettingScreenType) => {
  const {
    betting: {numbers, toggleNumber, reset, selectRandom, setBetAmount},
  } = useStore();

  const [value, setValue] = useState<string>('');

  const handlePress = (item: BettingStoreType) => {
    const isExceed: boolean =
      numbers.filter(number => number.selected === true).length > 4;
    if (isExceed && !item.selected) {
      alertWithSingleButton(
        'Alert',
        "You can't select more than 5 numbers",
        'Dismiss',
      );
      return;
    }
    toggleNumber(item.id);
  };

  const handleStakeInput = (amount: string) => {
    setValue(amount.replace(/[^0-9]/g, ''));
  };

  const handleEasyPick = () => {
    reset();
    selectRandom();
  };

  const handleBet = () => {
    setBetAmount(parseFloat(value));
    navigation.navigate('Result');
    setValue('');
    reset();
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View
          style={[
            styles.numberBox,
            {backgroundColor: item.selected ? 'green' : 'red'},
          ]}>
          <Text style={{color: '#ffffff'}}>{item.value}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.betContainer}>
        <Button
          size="sm"
          title="Easy Pick"
          style={styles.btnStyle}
          onPress={handleEasyPick}
        />
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={numbers}
        renderItem={renderItem}
        numColumns={10}
        style={{marginTop: 10}}
      />
      <View style={styles.btnContainer}>
        <Button
          size="sm"
          title="$50"
          type="outline"
          style={styles.btn}
          onPress={() => setValue('50')}
        />
        <Button
          size="sm"
          title="$100"
          type="outline"
          style={styles.btn}
          onPress={() => setValue('100')}
        />
        <Button
          size="sm"
          title="$200"
          type="outline"
          style={styles.btn}
          onPress={() => setValue('200')}
        />
        <Button
          size="sm"
          title="$500"
          type="outline"
          style={styles.btn}
          onPress={() => setValue('500')}
        />
        <Button
          size="sm"
          title="$1000"
          type="outline"
          style={styles.btn}
          onPress={() => setValue('1000')}
        />
        <TextInput
          style={styles.input}
          onChangeText={handleStakeInput}
          value={value}
        />
      </View>
      <View style={styles.betContainer}>
        <Button
          title="BET"
          buttonStyle={styles.btnStyle}
          onPress={handleBet}
          disabled={value === ''}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  numberBox: {
    width: 30,
    height: 30,
    margin: 3,
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    marginLeft: 2,
    marginRight: 2,
  },
  betContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
    width: '100%',
  },
  btnStyle: {
    marginRight: 10,
  },
  inputContainer: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignContent: 'flex-end',
    marginHorizontal: 70,
    marginTop: 10,
  },
  input: {
    width: 50,
    height: 32,
    marginLeft: 5,
    borderWidth: 1,
    padding: 5,
  },
  easyPickBtn: {
    marginTop: 10,
    alignItems: 'flex-end',
    textAlign: 'right',
  },
});

export default BettingScreen;

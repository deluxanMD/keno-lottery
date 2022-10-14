import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Header, Input, Button} from '@rneui/themed';
import {useStore} from '../store';
import {BettingStoreType} from '../store/BettingStore';
import {observer} from 'mobx-react-lite';

const BettingScreen = observer(() => {
  const {
    betting: {numbers, toggleNumber},
  } = useStore();

  const [value, setValue] = useState<string>('');

  const handlePress = (item: BettingStoreType) => {
    const isExceed: boolean =
      numbers.filter(number => number.selected === true).length > 4;
    if (isExceed) {
      return;
    }
    toggleNumber(item.id);
  };

  const handleStakeInput = (amount: string) => {
    setValue(amount);
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
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        rightComponent={<View></View>}
        centerComponent={{text: 'Keno Lottery'}}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={numbers}
        renderItem={renderItem}
        numColumns={10}
        style={{marginTop: 10}}
      />
      <View style={styles.btnContainer}>
        <Button
          title="$50"
          type="outline"
          style={styles.btn}
          onPress={() => setValue('50')}
        />
        <Button
          title="$100"
          type="outline"
          style={styles.btn}
          onPress={() => setValue('100')}
        />
        <Button
          title="$200"
          type="outline"
          style={styles.btn}
          onPress={() => setValue('200')}
        />
        <Button
          title="$500"
          type="outline"
          style={styles.btn}
          onPress={() => setValue('500')}
        />
        <Button
          title="$1000"
          type="outline"
          style={styles.btn}
          onPress={() => setValue('1000')}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Comment"
          leftIcon={{type: 'font-awesome', name: 'dollar'}}
          onChangeText={handleStakeInput}
          value={value}
          keyboardType="number-pad"
        />
        <Button title="BET" />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    marginLeft: 2,
    marginRight: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 70,
    marginTop: 10,
  },
});

export default BettingScreen;

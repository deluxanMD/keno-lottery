import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from '@rneui/themed';
import {useStore} from '../store';
import {BettingStoreType} from '../store/BettingStore';
import {observer} from 'mobx-react-lite';

const BettingScreen = observer(() => {
  const {
    betting: {numbers, toggleNumber},
  } = useStore();

  const handlePress = (item: BettingStoreType) => {
    toggleNumber(item.id);
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
});

export default BettingScreen;

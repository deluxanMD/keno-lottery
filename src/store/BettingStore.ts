import {makeAutoObservable} from 'mobx';

export type BettingStoreType = {
  id: string;
  value: string;
  selected: boolean;
};

export class BettingStore {
  numbers: BettingStoreType[] = [
    {
      id: '1',
      value: '1',
      selected: false,
    },
    {
      id: '2',
      value: '2',
      selected: false,
    },
    {
      id: '3',
      value: '3',
      selected: false,
    },
    {
      id: '4',
      value: '4',
      selected: false,
    },
    {
      id: '5',
      value: '5',
      selected: false,
    },
    {
      id: '6',
      value: '6',
      selected: false,
    },
    {
      id: '7',
      value: '7',
      selected: false,
    },
    {
      id: '8',
      value: '8',
      selected: false,
    },
    {
      id: '9',
      value: '9',
      selected: false,
    },
    {
      id: '10',
      value: '10',
      selected: false,
    },
    {
      id: '11',
      value: '11',
      selected: false,
    },
    {
      id: '12',
      value: '12',
      selected: false,
    },
    {
      id: '13',
      value: '13',
      selected: false,
    },
    {
      id: '14',
      value: '14',
      selected: false,
    },
    {
      id: '15',
      value: '15',
      selected: false,
    },
    {
      id: '16',
      value: '16',
      selected: false,
    },
    {
      id: '17',
      value: '17',
      selected: false,
    },
    {
      id: '18',
      value: '18',
      selected: false,
    },
    {
      id: '19',
      value: '19',
      selected: false,
    },
    {
      id: '20',
      value: '20',
      selected: false,
    },
    {
      id: '21',
      value: '21',
      selected: false,
    },
    {
      id: '22',
      value: '22',
      selected: false,
    },
    {
      id: '23',
      value: '23',
      selected: false,
    },
    {
      id: '24',
      value: '24',
      selected: false,
    },
    {
      id: '25',
      value: '25',
      selected: false,
    },
    {
      id: '26',
      value: '26',
      selected: false,
    },
    {
      id: '27',
      value: '27',
      selected: false,
    },
    {
      id: '28',
      value: '28',
      selected: false,
    },
    {
      id: '29',
      value: '29',
      selected: false,
    },
    {
      id: '30',
      value: '30',
      selected: false,
    },
    {
      id: '31',
      value: '31',
      selected: false,
    },
    {
      id: '32',
      value: '32',
      selected: false,
    },
    {
      id: '33',
      value: '33',
      selected: false,
    },
    {
      id: '34',
      value: '34',
      selected: false,
    },
    {
      id: '35',
      value: '35',
      selected: false,
    },
    {
      id: '36',
      value: '36',
      selected: false,
    },
    {
      id: '37',
      value: '37',
      selected: false,
    },
    {
      id: '38',
      value: '38',
      selected: false,
    },
    {
      id: '39',
      value: '39',
      selected: false,
    },
    {
      id: '40',
      value: '40',
      selected: false,
    },
    {
      id: '41',
      value: '41',
      selected: false,
    },
    {
      id: '42',
      value: '42',
      selected: false,
    },
    {
      id: '43',
      value: '43',
      selected: false,
    },
    {
      id: '44',
      value: '44',
      selected: false,
    },
    {
      id: '45',
      value: '45',
      selected: false,
    },
    {
      id: '46',
      value: '46',
      selected: false,
    },
    {
      id: '47',
      value: '47',
      selected: false,
    },
    {
      id: '48',
      value: '48',
      selected: false,
    },
    {
      id: '49',
      value: '49',
      selected: false,
    },
    {
      id: '50',
      value: '50',
      selected: false,
    },
    {
      id: '51',
      value: '51',
      selected: false,
    },
    {
      id: '52',
      value: '52',
      selected: false,
    },
    {
      id: '53',
      value: '53',
      selected: false,
    },
    {
      id: '54',
      value: '54',
      selected: false,
    },
    {
      id: '55',
      value: '55',
      selected: false,
    },
    {
      id: '56',
      value: '56',
      selected: false,
    },
    {
      id: '57',
      value: '57',
      selected: false,
    },
    {
      id: '58',
      value: '58',
      selected: false,
    },
    {
      id: '59',
      value: '59',
      selected: false,
    },
    {
      id: '60',
      value: '60',
      selected: false,
    },
    {
      id: '61',
      value: '61',
      selected: false,
    },
    {
      id: '62',
      value: '62',
      selected: false,
    },
    {
      id: '63',
      value: '63',
      selected: false,
    },
    {
      id: '64',
      value: '64',
      selected: false,
    },
    {
      id: '65',
      value: '65',
      selected: false,
    },
    {
      id: '66',
      value: '66',
      selected: false,
    },
    {
      id: '67',
      value: '67',
      selected: false,
    },
    {
      id: '68',
      value: '68',
      selected: false,
    },
    {
      id: '69',
      value: '69',
      selected: false,
    },
    {
      id: '70',
      value: '70',
      selected: false,
    },
    {
      id: '71',
      value: '71',
      selected: false,
    },
    {
      id: '72',
      value: '72',
      selected: false,
    },
    {
      id: '73',
      value: '73',
      selected: false,
    },
    {
      id: '74',
      value: '74',
      selected: false,
    },
    {
      id: '75',
      value: '75',
      selected: false,
    },
    {
      id: '76',
      value: '76',
      selected: false,
    },
    {
      id: '77',
      value: '77',
      selected: false,
    },
    {
      id: '78',
      value: '78',
      selected: false,
    },
    {
      id: '79',
      value: '79',
      selected: false,
    },
    {
      id: '80',
      value: '80',
      selected: false,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  toggleNumber = (id: string) => {
    this.numbers = this.numbers.map(number => {
      if (number.id === id) {
        return {...number, selected: !number.selected};
      }
      return number;
    });
  };
}

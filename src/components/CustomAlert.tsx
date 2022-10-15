import {Alert} from 'react-native';

export const alertWithSingleButton = (
  title: string,
  description: string,
  buttonLabel: string,
) => Alert.alert(title, description, [{text: buttonLabel}]);

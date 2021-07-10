// eslint-disable-next-line import/no-unresolved
import { StackHeaderMode } from '@react-navigation/stack/lib/typescript/src/types';
import { Platform } from 'react-native';

export default function useNavHeader(): StackHeaderMode {
  let setHeader: StackHeaderMode;

  setHeader = 'screen';

  if(Platform.OS === 'web') {
    setHeader = 'none';
  }
  return setHeader;
}

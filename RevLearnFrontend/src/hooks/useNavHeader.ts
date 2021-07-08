import { StackHeaderMode } from "@react-navigation/stack/lib/typescript/src/types";
import { Platform } from "react-native";

export function useNavHeader(): StackHeaderMode {
  let setHeader: StackHeaderMode;
  {Platform.OS === 'web'
    ? setHeader = 'none'
    : setHeader = 'screen'
  }
  
  return setHeader;
}
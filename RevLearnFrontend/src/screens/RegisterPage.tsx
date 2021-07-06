import React from "react";
import {Text} from 'react-native';
import WithNavBar from "../../components/higher_order_components/WithNavBar";

type Props = {
  toggleRegister: Dispatch<SetStateAction<boolean>>
  showRegister: boolean
}

const RegisterForm: React.FC<Props> = ({ toggleRegister, showRegister }) => {
  return (
    <>
      <view>
        <Text>Register</Text>
          <TextInput>
            
          </TextInput>
      </view>
  )
}
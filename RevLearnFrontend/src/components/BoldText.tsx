import React from 'react';
import { Text } from 'react-native';

type Props = {
  input: string,
}
const B: React.FC<Props> = ({ input }) => <Text style={{ fontWeight: 'bold' }}>{input}</Text>;

export default B;

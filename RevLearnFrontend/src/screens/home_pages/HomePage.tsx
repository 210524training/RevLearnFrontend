import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';

type Props = {

}
const HomePage: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  /**
   * Navigate to Course Home
   */
  const NavToCourseHome = () => {
    console.log('navigating...');
    navigation.navigate('CourseHome', { screen: 'CourseHomeNav' });
  };
  return (
    <>
      <Text>HomePage</Text>
      <Button title={'button'} onPress={NavToCourseHome}>Course Home Page</Button>
    </>
  );
};

export default WithHomeNavbar(HomePage);

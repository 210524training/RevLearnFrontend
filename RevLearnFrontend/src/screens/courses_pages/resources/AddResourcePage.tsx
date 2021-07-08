import React from "react";
import {Text} from 'react-native';
import WithCourseNavbar from "../../../components/higher_order_components/Navbars/WithCourseNavbar";

type Props = {

}
const AddResource: React.FC<Props> = (props) => {
  return (
    <>
      <Text>AddResource</Text>
    </>
  )
}

export default WithCourseNavbar(AddResource);
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';
import DisplayCourseList from '../../components/display_list/DisplayCourseList';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { Assignment } from '../../models/Assignment';
import { Course } from '../../models/Course';
import { courses } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {

}

const calculateCourseGrade = (course: Course) => {

  /* course.activities[0].submissions.reduce(temp, )
  const stringArray: string[] = ['tht', 'thth'];

  const test: string[] = stringArray.reduce((strArray: string[], string: string): string[] => {strArray.push(string); return strArray})

  const result: Course = course.activities.reduce((acc: (Assignment | Quiz), cur) => {
    acc = cur.submissions.
  }); */
};

const awaitRequest = async (set: React.Dispatch<React.SetStateAction<Course[] | undefined>>) => {
  // set(await getCoursesByUserID('123'));
};

const GradesOverviewPage: React.FC<Props> = (props) => {
  const [coursesList, setCourses] = useState<Course[]>(courses);
  useEffect(() => {
    /* awaitRequest(setCourses); */

  }, []);
  return (
    <>
      <Text>My Grades</Text>
      {coursesList
        ? (
          coursesList.map((course) => (<>
            <Text>{course.courseTitle}</Text>
            {course.activities.map((activity) => (<>
              {typeof (activity)}
              <Text>{activity.ID}</Text>
              <Text>{activity.title}</Text>
              <Text>{activity.submissions[0].grade}</Text>
            </>))}
          </>))
        )
        : <> </>
      }

    </>
  );
};

export default WithHomeNavbar(GradesOverviewPage);

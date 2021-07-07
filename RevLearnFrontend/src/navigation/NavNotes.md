# NavNotes

- **Navigation Container** web / app
  
  - **RootNavigator** - stack

    - **RootNav** - stack / tab

      - LandingPage
      - LoginPage

    - **HomeNav** - stack / drawer

      - UserInfo
      - Settings

    - **Admins**

      - AllUsers
      - AllTeachers
      - CreateTeacher
      - AllCourses
      - CreateCourse

    - **Students**

      - GradesOverView
      - CourseHome stack / drawer
        - CourseInfo
        - CourseResources
          - DetailedResource
        - Assignments
          - SubmitAssignments
        - CourseGrades
        - Quizzes
          - QuizPage
      - AllCourses

    - **Teachers**
      - CourseHome
        - AdmissionRequests
        - Students
        - CourseInfo
          - UpdateCourseInfo
        - CourseResources
          - AddCourseresource
        - Assignments
          - CreateAssignment
          - AssignmentsSubmissions
            - DetaliedSubmission
        - AllCourseGrades
        - Quizzes
          - CreateQuiz
          - QuizGrades

    - **NotFound** - stack / stack

      - NotFound

    - **Modal** - stack / stack

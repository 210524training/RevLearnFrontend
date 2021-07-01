# RevLearnFrontend

This repo will contain the react front end of our project.

## Learning Management System

## RevLearn

Our project is a Learning Management System. This will enable a organizations online course delivery. As well as track grades, course resourses, and assignments.

The program will have three roles Student, Teacher, and Admins. It will be used by students to access course work, quizzes, grades, enroll in new courses. create a new student account. The teacher will be able to assign and change quizzes, grades, course work. As well as upload course resources, approve course enrollment. Admins will be able to create courses, create site wide notification banners, uplift teachers, and assign teachers to a course.

The application will consist of four layers, the react frontend, the api, the database, the S3 file storage. The React frontend handles buisness logic, for example user interaction, input validation, and system managment. The API layer handles interaction bettween the front end and the datbase / and S3. The database stores persistent data from the frontend. The S3 bucket will store files from the front end.

- As an admin, I can create a course
- As an admin, I can assign a teacher to a course
- As an admin, I can create site wide notification banners.
- As a student, I can request to enroll in a course
- As a student, I can view a list of my enrolled courses
- As a student, I can view course resources
- As a student, I can view my grades
- As a student, I can submit assignments by uploading a file
- As a student, I can take quizzes assigned by the teacher.
- As a student, I can dropout of a course.
- As a teacher, I can approve enrollment requests for my courses
- As a teacher, I can upload resources to a course
- As a teacher, I can create assignments
- As a teacher, I can view assignment submissions and assign grades
- As a teacher, I can view quiz results and approve / change grades
- As a teacher, I can create assessments
- As a teacher, I can drop students from my course.
- As the system, I can automatically assign a zero to a student of the assignment passes its due-date
- As the system, I can mark courses as completed after the ending date

### strech goals

- As the system I can send certificate to student with a passing grade.
- As a user, I can send messages to other users.
- As the system, I can send email / push notifications when due-dates are near
- As a user, I can update my acount settings to affect the sites styling

# RevLearnFrontend

This repo will contain the React Frontend of our project.

## Learning Management System

## RevLearn

Our project is a Learning Management System. Revlearn will enable an organization's online course delivery. A course consists of a homepage, grading scale, general course information, lectures, homework assignment, separate page for quizzes/exams. Each student can have a final grade in the course.

Users will be able to use Revlearn to track grades, course resources, and assignments.

The program will have three roles: Student, Teacher, and Admins. Revlearn will enable students to access course work, quizzes, grades, enroll in new courses, and create a new student account. The teacher will assign quizzes, grades, course work, upload course resources, and approve course enrollment. Admins will develop courses, create site-wide notification banners, uplift teachers, and assign teachers to a class.

The application will consist of four layers, the React Native frontend, the API, the database, the S3 file storage. The React Native frontend handles business logic, for example, user interaction, input validation, and system management. The API layer handles interaction between the front end and the database / and S3. The database stores persistent data from the front end. The S3 bucket will store files from the front end.

- As an admin, I can create a course
- As an admin, I can assign a teacher to a course
- As an admin, I can create site-wide notification banners.
- As a student, I can request to enroll in a course
- As a student, I can view a list of my enrolled courses
- As a student, I can view course resources
- As a student, I can view my grades
- As a student, I can submit assignments by uploading a file
- As a student, I can take quizzes assigned by the teacher.
- As a student, I can drop out of a course.
- As a teacher, I can approve enrollment requests for my courses
- As a teacher, I can upload resources to a course
- As a teacher, I can create assignments
- As a teacher, I can view assignment submissions and assign grades
- As a teacher, I can view quiz results and approve/change grades
- As a teacher, I can create assessments
- As a teacher, I can drop students from my course.
- As the system, I can automatically assign a zero to a student of the assignment passes its due date
- As the system, I can mark courses as completed after the ending date

### strech goals

- As the system, I can send a certificate to a student with a passing grade.
- As a user, I can send messages to other users.
- As the system, I can send email/push notifications when due dates are near
- As a user, I can update my account settings to affect the site's styling

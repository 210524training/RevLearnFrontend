export type LetterGrade = 'A' | 'B' | 'C' | 'D' | 'F';

export type AssignmentType = 'Homework' | 'Project' | 'Paper' | 'Report';

export type ActivityType = 'Assignment' | 'Quiz';

export type MultipleChoiceOption = 'OptionA' | 'OptionB' | 'OptionC' | 'OptionD';

export type MultipleChoicePossibleAnswer = { option: MultipleChoiceOption, answer: string };

/**
 * User Role
 */
export type Role = 'Student' | 'Teacher' | 'Admin';

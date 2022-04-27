const values = ['list', 'grid', 'scale', 'open', 'closed'] as const;
export type QuestionValue = typeof values[number];

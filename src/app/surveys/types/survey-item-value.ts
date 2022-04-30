const values = ['list', 'grid', 'scale', 'open', 'closed'] as const;
export type SurveyItemValue = typeof values[number];

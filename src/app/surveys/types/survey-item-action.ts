const actions = ['add', 'cancel'] as const;
export type SurveyItemAction = typeof actions[number];

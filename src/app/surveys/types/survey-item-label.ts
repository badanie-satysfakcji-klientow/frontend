const viewValues = ['lista rozwijana', 'pytanie otwarte', 'pytanie zamknięte', 'siatka pól wyboru', 'skala'] as const;
export type SurveyItemLabel = typeof viewValues[number];

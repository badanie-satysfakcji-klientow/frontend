const viewValues = ['Lista rozwijana', 'Pytanie otwarte', 'Pytanie zamknięte', 'Siatka pól wyboru', 'Skala'] as const;
export type QuestionViewValue = typeof viewValues[number];

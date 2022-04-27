const viewValues = ['lista rozwijana', 'pytanie otwarte', 'pytanie zamknięte', 'siatka pól wyboru', 'skala'] as const;
export type QuestionViewValue = typeof viewValues[number];

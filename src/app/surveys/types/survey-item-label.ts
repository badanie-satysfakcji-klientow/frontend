const viewValues = ['lista rozwijana', 'pytanie otwarte', 'pytanie zamknięte', 'siatka pól wyboru', 'skala'] as const;
export type SurveyItemLabel = typeof viewValues[number];

export type SurveyItemLabelList = 'lista rozwijana';
export type SurveyItemLabelOpen = 'pytanie otwarte';
export type SurveyItemLabelClosed = 'pytanie zamknięte';
export type SurveyItemLabelGrid = 'siatka pól wyboru';
export type SurveyItemLabelScale = 'skala';

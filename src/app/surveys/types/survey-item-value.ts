const values = [
  'list',
  'gridSingle',
  'gridMultiple',
  'scale5',
  'scale10',
  'scaleNPS',
  'openShort',
  'openLong',
  'openNumeric',
  'closedSingle',
  'closedMultiple'
] as const;
export type SurveyItemValue = typeof values[number];

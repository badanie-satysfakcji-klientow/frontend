export type SurveyItemValueList = 'list';
export type SurveyItemValueGrid = 'gridSingle' | 'gridMultiple';
export type SurveyItemValueScale = 'scale5' | 'scale10' | 'scaleNPS';
export type SurveyItemValueOpen = 'openShort' | 'openLong' | 'openNumeric';
export type SurveyItemValueClosed = 'closedSingle' | 'closedMultiple';
export type SurveyItemValue =
  SurveyItemValueClosed |
  SurveyItemValueGrid |
  SurveyItemValueScale |
  SurveyItemValueOpen |
  SurveyItemValueList;

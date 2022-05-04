export type SurveyItemTypeList = 'list';
export type SurveyItemTypeGrid = 'gridSingle' | 'gridMultiple';
export type SurveyItemTypeScale = 'scale5' | 'scale10' | 'scaleNPS';
export type SurveyItemTypeOpen = 'openShort' | 'openLong' | 'openNumeric';
export type SurveyItemTypeClosed = 'closedSingle' | 'closedMultiple';
export type SurveyItemType =
  SurveyItemTypeClosed
  | SurveyItemTypeGrid
  | SurveyItemTypeScale
  | SurveyItemTypeOpen
  | SurveyItemTypeList;

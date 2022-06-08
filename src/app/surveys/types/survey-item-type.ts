export type SurveyItemTypeScale = 'scale5' | 'scale10' | 'scaleNPS';
export type SurveyItemTypeOpen = 'openShort' | 'openLong' | 'openNumeric';
export type SurveyItemTypeClosed = 'closedSingle' | 'closedMultiple';
export type SurveyItemType = SurveyItemTypeClosed
  | 'gridSingle'
  | 'gridMultiple'
  | SurveyItemTypeScale
  | SurveyItemTypeOpen
  | 'list';

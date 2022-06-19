import {SectionFormValue} from "../../surveys/interfaces/section-form-value";

export interface Section extends SectionFormValue{
  start_item: string;
  end_item: string;
  id: string;
}

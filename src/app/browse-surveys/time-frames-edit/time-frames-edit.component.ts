import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SavedSurveysService} from "../services/saved-surveys.service";
import {FormBuilder} from "@angular/forms";
import {Survey} from "../../shared/interfaces/survey";
import {DATE_SUFFIX} from "../../shared/constants/date-suffix";
import {FormGroup} from "@angular/forms";
import {DatesChronological} from "../../surveys/validators/dates-chronological";

@Component({
  selector: 'app-time-frames-edit',
  templateUrl: './time-frames-edit.component.html',
  styleUrls: ['./time-frames-edit.component.scss']
})
export class TimeFramesEditComponent {
  timeFrameForm: FormGroup;
  editedSurvey: Survey;

  constructor(private dialogRef: MatDialogRef<TimeFramesEditComponent>,
              private savedSurveys: SavedSurveysService,
              private formBuilder: FormBuilder,
              private datesChronological: DatesChronological,
              @Inject(MAT_DIALOG_DATA) dialogData: Survey
  ) {
    this.timeFrameForm = this.formBuilder.group({
      startDate: this.formBuilder.control(dialogData.starts_at.substring(0, 16)),
      endDate: this.formBuilder.control(dialogData.expires_at.substring(0, 16))
    }, {validators: datesChronological.validate})
    this.editedSurvey = dialogData;
  }

  onEditClick() {
    const updatedStartDate = this.timeFrameForm.controls['startDate'].value.concat(DATE_SUFFIX);
    const updatedEndDate = this.timeFrameForm.controls['endDate'].value.concat(DATE_SUFFIX);
    this.savedSurveys.updateTimeFrames(this.editedSurvey.id, updatedStartDate, updatedEndDate).subscribe(() => {
      this.editedSurvey.starts_at = updatedStartDate;
      this.editedSurvey.expires_at = updatedEndDate;
      this.onCloseClick();
    });
  }

  onCloseClick() {
    this.dialogRef.close();
  }
}

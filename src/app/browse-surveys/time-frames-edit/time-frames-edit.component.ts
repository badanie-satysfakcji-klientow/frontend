import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SavedSurveysService} from "../services/saved-surveys.service";
import {FormBuilder, FormControl} from "@angular/forms";
import {Survey} from "../../shared/interfaces/survey";
import {DATE_SUFFIX} from "../../shared/constants/date-suffix";

@Component({
  selector: 'app-time-frames-edit',
  templateUrl: './time-frames-edit.component.html',
  styleUrls: ['./time-frames-edit.component.scss']
})
export class TimeFramesEditComponent {
  startControl: FormControl;
  endControl: FormControl;
  editedSurvey: Survey;

  constructor(private dialogRef: MatDialogRef<TimeFramesEditComponent>,
              private savedSurveys: SavedSurveysService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) dialogData: Survey
  ) {
    this.startControl = this.formBuilder.control(dialogData.starts_at.substring(0, 16));
    this.endControl = this.formBuilder.control(dialogData.expires_at.substring(0, 16));
    this.editedSurvey = dialogData;
  }

  onEditClick() {
    const updatedStartDate = this.startControl.value.concat(DATE_SUFFIX)
    const updatedEndDate = this.endControl.value.concat(DATE_SUFFIX);
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

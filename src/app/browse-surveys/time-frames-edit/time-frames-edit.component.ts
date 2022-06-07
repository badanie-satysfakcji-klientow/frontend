import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SavedSurveysService} from "../services/saved-surveys.service";
import {FormBuilder, FormControl} from "@angular/forms";
import {TimeFramesData} from "../interfaces/time-frames-data";

@Component({
  selector: 'app-time-frames-edit',
  templateUrl: './time-frames-edit.component.html',
  styleUrls: ['./time-frames-edit.component.scss']
})
export class TimeFramesEditComponent {
  startControl: FormControl;
  endControl: FormControl;

  constructor(private dialogRef: MatDialogRef<TimeFramesEditComponent>,
              private savedSurveys: SavedSurveysService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) dialogData: TimeFramesData
  ) {
    this.startControl = this.formBuilder.control(dialogData.starts_at.substring(0, 16));
    this.endControl = this.formBuilder.control(dialogData.expires_at.substring(0, 16));
  }

  onCloseClick() {
    this.dialogRef.close();
  }

}

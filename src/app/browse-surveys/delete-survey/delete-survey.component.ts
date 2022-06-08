import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatDialogRef} from "@angular/material/dialog";
import {SavedSurveysService} from "../services/saved-surveys.service";
import {DeleteData} from "../interfaces/delete-data";
import {MatTableDataSource} from "@angular/material/table";
import {Survey} from "../../shared/interfaces/survey";

@Component({
  selector: 'app-delete-survey',
  templateUrl: './delete-survey.component.html',
  styleUrls: ['./delete-survey.component.scss']
})
export class DeleteSurveyComponent {
  title: string;
  id: string;
  dataSource: MatTableDataSource<Survey>;

  constructor(private dialogRef: MatDialogRef<DeleteSurveyComponent>,
              private savedSurveys: SavedSurveysService,
              @Inject(MAT_DIALOG_DATA) dialogData: DeleteData) {
    this.title = dialogData.title;
    this.id = dialogData.id;
    this.dataSource = dialogData.dataSource;
  }

  onDeleteClick() {
    this.savedSurveys.deleteSurvey(this.id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((survey) => survey.id !== this.id);
      this.onCancelClick();
    });
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}

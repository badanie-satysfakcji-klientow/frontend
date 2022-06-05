import {MatTableDataSource} from "@angular/material/table";
import {Survey} from "../../shared/interfaces/survey";

export interface DeleteData {
  id: string;
  title: string;
  dataSource: MatTableDataSource<Survey>
}

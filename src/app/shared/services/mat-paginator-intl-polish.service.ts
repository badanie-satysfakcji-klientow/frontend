import {Injectable} from '@angular/core';
import {MatPaginatorIntl} from "@angular/material/paginator";

@Injectable({
  providedIn: 'root'
})
export class MatPaginatorIntlPolishService extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Elementy na stronie';
  override nextPageLabel = 'Następna strona';
  override previousPageLabel = 'Poprzednia strona';
  override firstPageLabel = 'Pierwsza strona';
  override lastPageLabel = 'Ostatnia strona';
}

import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Article } from 'src/app/core/services/models/response.model';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ]
})
export class ListComponent
{
  @Input()
  public list: Array<Article> = [];

  constructor(private dialog: MatDialog)
  { }

  public openDialog(item: Article): void
  {
    this.dialog.open(DialogComponentComponent, {
      data: {
        article: item
      }
    });
  }
}

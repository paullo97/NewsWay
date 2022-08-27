import { Component, Input } from '@angular/core';
import { Article } from 'src/app/core/services/models/response.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.scss' ]
})
export class ListComponent
{
    @Input()
    public list: Array<Article> = [];

    public openDialog(article: Article): void
    {
      console.log(article.content);
    }
}

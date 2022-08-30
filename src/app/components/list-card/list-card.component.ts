import { Component, Input } from '@angular/core';
import { Article } from './../../core/services/models/response.model';

@Component({
    selector: 'app-list-card',
    templateUrl: './list-card.component.html',
    styleUrls: [ './list-card.component.scss' ]
})
export class ListCardComponent
{
    @Input()
    public article: Article | undefined;
}

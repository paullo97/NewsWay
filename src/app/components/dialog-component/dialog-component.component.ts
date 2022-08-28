import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from './../../core/services/models/response.model';

@Component({
    selector: 'app-dialog-component',
    templateUrl: './dialog-component.component.html',
    styleUrls: [ './dialog-component.component.scss' ]
})
export class DialogComponentComponent
{
    public article: Article;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any
    )
    {
        this.article = this.data.article;
    }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { loadFullArticle } from 'src/app/core/store/full-article/article.actions';
import { FullArticleStore } from 'src/app/core/store/full-article/article.store';
import { Article } from './../../core/services/models/response.model';

@Component({
    selector: 'app-dialog-component',
    templateUrl: './dialog-component.component.html',
    styleUrls: [ './dialog-component.component.scss' ]
})
export class DialogComponentComponent implements OnInit
{
    public article: Article;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private readonly store: Store<FullArticleStore>,
        private readonly dialog: MatDialog
    )
    {
        this.article = this.data.article;
    }

    public ngOnInit(): void
    {
        this.article = this.data.article;
        this.store.dispatch(loadFullArticle({ url: this.article.url }));
    }

   /**
    * The function opens a dialog box with a confirmation message and a link to the article
    */
    public outside(): void
    {
        this.dialog.open(ConfirmationDialogComponent,
            {
                disableClose: true,
                data: {
                    url: this.article.url
                }
            }
        );
    }

}

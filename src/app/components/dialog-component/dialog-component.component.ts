import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { loadFullArticle } from 'src/app/core/store/full-article/article.actions';
import { FullArticleStore } from 'src/app/core/store/full-article/article.store';
import { Article } from './../../core/services/models/response.model';
import { removeFavorite, saveFavorite } from './../../core/store/news/news.actions';

@Component({
    selector: 'app-dialog-component',
    templateUrl: './dialog-component.component.html',
    styleUrls: [ './dialog-component.component.scss' ]
})
export class DialogComponentComponent implements OnInit
{
    public article: Article;
    public titleFavorite: string = 'Add';

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Article,
        private store: Store<FullArticleStore>,
        private dialog: MatDialog,
        private router: Router
    )
    {
        this.article = this.data;
    }

    public ngOnInit(): void
    {
        this.store.dispatch(loadFullArticle({ url: this.article?.url || '' }));
        this.titleFavorite = this.router.url === '/' ? 'Add' : 'Remove';
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
                    url: this.article?.url
                }
            }
        );
    }

    /**
     * Dispatching an action to the store, to save article in list favorite
     */
    public toggleFavorite(): void
    {
        this.dialog.closeAll();
        this.store.dispatch(
            this.router.url === '/'
            ? saveFavorite({ article: this.article })
            : removeFavorite({ article: this.article })
        )
    }

    /**
     * If the titleFavorite is equal to 'Add', then return the string 'empty_heart.png', otherwise return
     * the string 'heart.png'
     * @returns The icon() method is being returned.
     */
    public icon(): string
    {
        return  this.titleFavorite === 'Add' ? 'empty_heart.png' : 'heart.png'
    }
}

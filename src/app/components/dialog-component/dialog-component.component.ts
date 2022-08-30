import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
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
        private readonly store: Store<FullArticleStore>
    )
    {
        this.article = this.data.article;
    }

    public ngOnInit(): void
    {
        console.log('passou');
        this.article = this.data.article;
        this.store.dispatch(loadFullArticle({ url: this.article.url }));
    }

}

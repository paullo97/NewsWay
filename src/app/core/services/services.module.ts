
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FullArticleService } from './full-article.service';
import { NewsService } from './news.service';


@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
      NewsService,
      FullArticleService
    ]
})
export class ServicesModule
{ }

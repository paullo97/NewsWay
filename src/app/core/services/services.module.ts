
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NewsService } from './news.service';


@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
      NewsService
    ]
})
export class ServicesModule
{ }

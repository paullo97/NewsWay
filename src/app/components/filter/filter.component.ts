import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { NewsStore } from 'src/app/core/store/news/news.store';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: [ './filter.component.scss' ]
})
export class FilterComponent
{
    public keyString: string = '';
    public titleEnable: boolean = false;
    public contentEnable: boolean = false;
    public descriptionEnable: boolean = false;
    public domains: string = '';
    public excludeDomains: string = '';
    public languageSelect: string = 'pt';
    public sortBy: string = 'publishedAt';

    public range = new FormGroup({
        start: new FormControl<Date | null>(null),
        end: new FormControl<Date | null>(null),
    });

    public value: string = '';
    public languages: Array<{value: string; viewValue: string;}> = [
        {value: 'ar', viewValue: 'Arabic'},
        {value: 'de', viewValue: 'German'},
        {value: 'en', viewValue: 'English'},
        {value: 'es', viewValue: 'Spanish'},
        {value: 'fr', viewValue: 'French'},
        {value: 'he', viewValue: 'Hebrew'},
        {value: 'it', viewValue: 'Italian'},
        {value: 'nl', viewValue: 'Dutch'},
        {value: 'no', viewValue: 'Norwegian'},
        {value: 'pt', viewValue: 'Portuguese'},
        {value: 'ru', viewValue: 'Russian'},
        {value: 'sv', viewValue: 'Swedish'},
        {value: 'zh', viewValue: 'Chinese'}
    ];

    constructor(
        private readonly _snackBar: MatSnackBar,
        private readonly store: Store<NewsStore>
    )
    { }

    public search(): void
    {
        if(this.keyString.length === 0)
        {
            this._snackBar.open('Please, include word or Phrase to search', '', {duration: 3000});
            return;
        }
        if(!this.titleEnable && !this.contentEnable && !this.descriptionEnable)
        {
            this._snackBar.open('Please, select one option', '', {duration: 3000});
            return;
        }
    }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { languagesModel } from 'src/app/core/services/models/language.model';
import { getLanguages, getNewsLoading } from 'src/app/core/store/news/news.selectors';
import { NewsStore } from 'src/app/core/store/news/news.store';
import { loadNews } from './../../core/store/news/news.actions';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: [ './filter.component.scss' ]
})
export class FilterComponent
{
    public loading$: Observable<boolean> = this.store.select(getNewsLoading);
    public languages$: Observable<Array<languagesModel>> = this.store.select(getLanguages);

    public keyString: string = 'Brasil';
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

    constructor(
        private readonly _snackBar: MatSnackBar,
        private readonly store: Store<NewsStore>
    )
    { }

    public search(): void
    {
        if (this.keyString.length === 0)
        {
            this._snackBar.open('Please, include word or Phrase to search', '', { duration: 3000 });
            return;
        }

        const {end, start} = this.range.value;
        this.store.dispatch(loadNews({
            request: {
                q: this.keyString.split('').length > 1 ? '"' + this.keyString +'"' : this.keyString,
                language: this.languageSelect,
                searchIn: this.searchIn(),
                domains: this.domains,
                excludeDomains: this.excludeDomains,
                from: start?.toISOString(),
                to: end?.toISOString(),
                sortBy: this.sortBy
            }
        }))
    }

    private searchIn(): string
    {
        let aux: string = '';
        if (this.titleEnable)
        {
            aux = aux + 'title';
        }
        if (this.contentEnable)
        {
            aux = aux + ',content';
        }
        if (this.descriptionEnable)
        {
            aux = aux + ',description';
        }
        return aux;
    }
}

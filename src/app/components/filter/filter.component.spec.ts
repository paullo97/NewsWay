import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () =>
{
    const loading$: Observable<boolean> = of(false);
    const languages$: Observable<Array<any>> = of([]);
    const keyString: string = 'Brasil';
    const titleEnable: boolean = false;
    const contentEnable: boolean = false;
    const descriptionEnable: boolean = false;
    const domains: string = '';
    const excludeDomains: string = '';
    const languageSelect: string = 'pt';
    const sortBy: string = 'publishedAt';
    const aux: string = '';
    const range = new FormGroup({
        start: new FormControl<Date | null>(null),
        end: new FormControl<Date | null>(null),
    });

    let component: FilterComponent;
    let fixture: ComponentFixture<FilterComponent>;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            declarations: [ FilterComponent ],
            imports: [
                CoreModule
            ],
            providers: [
                {provide: MatSnackBar, useValue: undefined},
                {provide: Store }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});

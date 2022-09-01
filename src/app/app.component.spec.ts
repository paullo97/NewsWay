import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () =>
{
    const title = 'Welcome to NewsWay - the new way to get news';
    const loading$ = true;
    const articles$ = [ {
        source: {
            id: '',
            name: ''
        },
        author: '',
        title: '',
        description: '',
        url: '',
        urlToImage: '',
        publishedAt: new Date(),
        content: '',
    } ];

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                CoreModule
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: Store },
                { provide: Router },
                { provide: MatSnackBar },
                { provide: StoreModule}
            ]
        }).compileComponents();
    });

    it('should create the app', () =>
    {
        expect(AppComponent).toBeTruthy();
    });
});

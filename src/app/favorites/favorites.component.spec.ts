import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { CoreModule } from './../core/core.module';

import { FavoritesComponent } from './favorites.component';

describe('FavoritesComponent', () =>
{
    let component: FavoritesComponent;
    let fixture: ComponentFixture<FavoritesComponent>;
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
            declarations: [ FavoritesComponent ],
            imports: [
                CoreModule
            ],
            providers: [
                { provide: Store },
                { provide: MatSnackBar, useValue: undefined }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(FavoritesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});

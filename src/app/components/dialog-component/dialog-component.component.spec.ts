import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { CoreModule } from 'src/app/core/core.module';

import { DialogComponentComponent } from './dialog-component.component';

describe('DialogComponentComponent', () =>
{
    const titleFavorite = '';
    const article = '';
    let component: DialogComponentComponent;
    let fixture: ComponentFixture<DialogComponentComponent>;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            declarations: [ DialogComponentComponent ],
            imports: [
                CoreModule,
            ],
            providers: [
                { provide: MatDialog, useValue: undefined },
                { provide: MAT_DIALOG_DATA, useValue: undefined },
                { provide: Store},
                { provide: MatSnackBar, useValue: undefined}
            ]
        })
            .compileComponents();
    });

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(DialogComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});

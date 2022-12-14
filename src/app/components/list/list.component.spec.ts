import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { ListComponent } from './list.component';

describe('ListComponent', () =>
{
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(async () =>
    {
        await TestBed.configureTestingModule({
            declarations: [ ListComponent ],
            providers: [
                {provide: MatDialog, useValue: undefined}
            ]
        })
            .compileComponents();
    });

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});

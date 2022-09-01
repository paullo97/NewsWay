import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { CoreModule } from './../core/core.module';
import { HomeComponent } from './home.component';

describe('HomeComponent', () =>
{
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
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
            declarations: [ HomeComponent ],
            imports: [
                CoreModule
            ],
            providers: [
                { provide: Store },
                { provide: MatSnackBar, useValue: undefined}
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});

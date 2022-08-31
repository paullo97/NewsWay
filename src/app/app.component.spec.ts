import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
    const title= 'Welcome to NewsWay - the new way to get news';
    const loading$ = true;
    const articles$ = [{
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
    }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: Store}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    expect(AppComponent).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Welcome to NewsWay - the new way to get news');
  });
});

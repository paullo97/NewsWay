import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent
{
    public title: string = 'Welcome to NewsWay - the new way to get news';
    public titleBtn = '';

    /**
     * We're using the router to check if the current URL is equal to '/favorites'. If it is, we set the
     * titleBtn to 'Back to Feed'. If it isn't, we set the titleBtn to 'See Favorites'
     * @param {Router} router - Router - This is the Angular Router service.
     */
    constructor(private readonly router: Router)
    {
        this.titleBtn = this.router.url === '/favorites' ? 'Back to Feed' : 'See Favorites' ;
    }

    /**
     * If the current route is the root route, navigate to the favorites route, otherwise navigate to the
     * root route
     */
    public goRoute(): void
    {
        this.router.url === '/'
            ? this.router.navigateByUrl('/favorites')
            : this.router.navigateByUrl('/');

        this.titleBtn = this.router.url === '/' ? 'Back to Feed' : 'See Favorites';
    }
}

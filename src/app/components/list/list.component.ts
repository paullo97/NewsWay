import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Article } from 'src/app/core/services/models/response.model';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit
{
    @Input()
    public list: Array<Article> = [];

    public innerHeight: string = '';

    constructor(private readonly dialog: MatDialog)
    { }

    public ngOnInit(): void
    {
        this.refreshHeaderHeight()
    }

    /**
     * The function opens a dialog box with the data of the article that was clicked on
     * @param {Article} item - Article - this is the item that is passed to the dialog component.
     */
    public openDialog(item: Article): void
    {
        this.dialog.open(DialogComponentComponent, {
            data: {
                article: item
            }
        });
    }

    /* This is a decorator that is listening for the window resize event. */
    @HostListener('window:resize', ['$event'])
    public onResize(): void
    {
        console.log('onResize');
        this.refreshHeaderHeight();
    }

    /**
     * It sets the height of the header to the height of the window minus 210px.
     */
    public refreshHeaderHeight(): void
    {
        this.innerHeight = `${window.innerHeight - 210}px`;
    }
}

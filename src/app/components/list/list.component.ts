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

    constructor(private dialog: MatDialog)
    { }

    public ngOnInit(): void
    {
        this.refreshHeaderHeight()
    }

    public openDialog(item: Article): void
    {
        this.dialog.open(DialogComponentComponent, {
            data: {
                article: item
            }
        });
    }

    @HostListener('window:resize', ['$event'])
    public onResize(): void
    {
        console.log('onResize');
        this.refreshHeaderHeight();
    }

    public refreshHeaderHeight(): void
    {
        this.innerHeight = `${window.innerHeight - 210}px`;
    }
}

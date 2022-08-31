import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent
{
    public url: string = '';

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        @Inject(DOCUMENT) private document: Document
    )
    {
        /* Copying the data object's properties to the component's properties. */
        Object.assign(this, this.data);
    }

    /**
     * This function sets the document's location to the url property.
     */
    public router(): void
    {
        this.document.location.href = this.url;
    }
}

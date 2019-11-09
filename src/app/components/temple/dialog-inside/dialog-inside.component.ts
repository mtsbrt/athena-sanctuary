import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    templateUrl: './dialog-inside.component.html',
    styleUrls: ['./dialog-inside.component.scss']
})
export class DialogInsideComponent {
 

    constructor(
        @Inject(MAT_DIALOG_DATA) public data
    ) {
        console.log(this.data);
    }
}
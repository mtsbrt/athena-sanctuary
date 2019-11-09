import { Saint } from './../../services/models/saint.model';
import { Component, Input } from "@angular/core";
import { Sign } from 'src/app/services/models/sign.model';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogInsideComponent } from './dialog-inside/dialog-inside.component';

@Component({
    selector: 'app-temple',
    styleUrls: ['./temple.component.scss'],
    templateUrl: './temple.component.html'
})
export class TempleComponent {

    @Input() public saint: Saint;
    @Input() public order: number;
    @Input() public sign: Sign;

    private dialogRef: MatDialogRef<DialogInsideComponent>;

    constructor(
        private matDialog: MatDialog
    ) { }

    public abrirModal() {
        console.log('abri modal');
        this.matDialog.open(DialogInsideComponent, {
            panelClass: 'panelClass',
            width: '500px',
            data: {
                sign: this.sign.name,
                outcome: this.sign.outcome,
                order: this.order,
                saint: this.saint || null
            }
        });
    }

}

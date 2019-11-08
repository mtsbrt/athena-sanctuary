import { Component, Input } from "@angular/core";
import { Sign } from 'src/app/services/models/sign.model';

@Component({
    selector: 'app-temple',
    styleUrls: ['./temple.component.scss'],
    templateUrl: './temple.component.html'
})
export class TempleComponent {

    @Input() public sign: Sign = {
        id: 0,
        name: null
    };

    constructor() { }

}

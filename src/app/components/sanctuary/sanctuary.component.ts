import { Component, OnInit } from "@angular/core";
import { SaintService } from 'src/app/services/saint.service';
import { SignService } from 'src/app/services/sign.service';
import { Sign } from 'src/app/services/models/sign.model';

@Component({
    selector: 'app-sanctuary',
    templateUrl: './sanctuary.component.html',
    styleUrls: ['./sanctuary.component.scss']
})
export class SanctuaryComponent implements OnInit {

    public signs: Sign[] = [];

    constructor(
        private saintService: SaintService,
        private signService: SignService
    ) {

    }

    ngOnInit() {
        this.signService.getSigns().subscribe(response => this.signs = response);
    }
}

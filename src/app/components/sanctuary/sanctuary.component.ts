import { Saint } from './../../services/models/saint.model';
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
    public goldSaints: Saint[] = [];

    constructor(
        private saintService: SaintService,
        private signService: SignService
    ) {

    }

    ngOnInit() {
        this.signService.getSigns().subscribe(response => {
            this.signs = response;
        });
        this.getGoldSaints();

    }

    public getGoldSaints() {
        this.saintService.getGoldSaints().subscribe(response => {
            this.goldSaints = response;
        });
    }

    public getTempleSaint(cloth: string): Saint {
        const saint = this.goldSaints.find(goldSaint => goldSaint.cloth === cloth);
        return saint;
    }
}

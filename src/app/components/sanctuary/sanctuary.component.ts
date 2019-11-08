import { Component, OnInit } from "@angular/core";
import { SaintService } from 'src/app/services/saint.service';

@Component({
    selector: 'app-sanctuary',
    templateUrl: './sanctuary.component.html',
    styleUrls: ['./sanctuary.component.scss']
})
export class SanctuaryComponent implements OnInit {
    constructor(
        private saintService: SaintService
    ) {

    }

    ngOnInit() {
        this.saintService.getGoldSaints().subscribe(x => {
            console.log(x);
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { HttpService} from './http.service';
import { Person } from './person';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HttpService]
})
export class AppComponent implements OnInit {

    persons: Person[]=[];

    constructor(private httpService: HttpService){}

    ngOnInit(){

        this.httpService.getData().subscribe(data => this.persons=data["persons"]);
    }
}

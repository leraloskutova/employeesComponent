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
    person: Person = new Person();
    error: any;

    constructor(private httpService: HttpService){}

    ngOnInit(){
        this.httpService.getData().subscribe(
            (data: Person[]) => this.persons=(data),
            error => {this.error = error.status; console.log(error);});
    }

    put(person: Person){
        this.httpService.putData(person).subscribe((data: Person) => this.person=data);
        window.location.href = '#';
    }


    post(person: Person){
        this.httpService.postData(person).subscribe((data: Person) => this.person=data);
        window.location.href = 'http://localhost:4200/';
    }

    delete(person: Person){
        this.httpService.deleteData(person.id).subscribe();
        window.location.href = 'http://localhost:4200/';
    }

    closeWindow() {
        window.location.href = 'http://localhost:4200/';
    }

    selectRow(person){
        this.person = person;
    }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from './person';

@Injectable()
export class HttpService{

    private url = 'http://localhost:3000/api/v1/persons';
    constructor(private http: HttpClient){ }

    getData(){
        return this.http.get(this.url);
    }

    putData(person: Person){
        return this.http.put(`http://localhost:3000/persons/${person.id}`, person);
    }

    postData(person: Person){
        const data = {id: undefined, firstName: person.firstName, lastName: person.lastName};
        return this.http.post('http://localhost:3000/persons', data);
    }

    deleteData(id: number) {
        return this.http.delete(`http://localhost:3000/persons/${id}`);
    }
}

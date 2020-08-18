import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from './person';

@Injectable()
/**
 * Класс для работы с запросами.
 */
export class HttpService {
  private url = 'http://localhost:3000/api/v1/persons';
  /**
   * Конструктор класса HttpService.
   */
  constructor(private http: HttpClient) {}
  /**
   * Запрос на получение списка сотрудников.
   * @return {Object} person
   */
  getData() {
    return this.http.get(this.url);
  }
  /**
   * Запрос на редактирование сотрудника.
   * @argument {Object} person
   * @return {Object} person
   */
  putData(person: Person) {
    return this.http.put(`http://localhost:3000/persons/${person.id}`, person);
    // return this.http.put(`http://localhost:3000/api/v1/persons/${person.id}`, person);
  }
  /**
   * Запрос на добавление сотрудника.
   * @argument {Object} person
   * @return {Object} person
   */
  postData(person: Person) {
    const data = {id: undefined,
      firstName: person.firstName,
      lastName: person.lastName};
    return this.http.post('http://localhost:3000/persons', data);
    // return this.http.post(this.url, data);
  }
  /**
   * Запрос на удаление сотрудника.
   * @argument {number} id
   * @return {Object} person
   */
  deleteData(id: number) {
    return this.http.delete(`http://localhost:3000/persons/${id}`);
    // return this.http.delete(`http://localhost:3000/api/v1/persons/${id}`);
  }
}

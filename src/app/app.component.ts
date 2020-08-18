import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {Person} from './person';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService],
})
/**
 * Класс компоненты приложения.
 */
export class AppComponent implements OnInit {
  persons: Person[]=[];
  person: Person = new Person();
  /**
   * Конструктор класса AppComponent.
   */
  constructor(private httpService: HttpService) {}
  /**
   * Получение списка сотрудников.
   */
  ngOnInit(): void {
    this.httpService.getData().subscribe(
        (data: Person[]) => this.persons=(data));
  }
  /**
   * Редактирование сотрудника.
   * @argument {Object} person
   */
  put(person: Person): void {
    this.httpService.putData(person).subscribe(
        (data: Person) => this.person=data);
    window.location.href = '#';
  }
  /**
   * Добавление сотрудника.
   * @argument {Object} person
   */
  post(person: Person): void {
    this.httpService.postData(person).subscribe(
        (data: Person) => this.person=data);
    window.location.href = 'http://localhost:4200/';
  }
  /**
   * Удаление сотрудника.
   * @argument {Object} person
   */
  delete(person: Person): void {
    this.httpService.deleteData(person.id).subscribe();
    window.location.href = 'http://localhost:4200/';
  }
  /**
   * Закрытие модального окна (перезагрузка страницы).
   */
  closeWindow(): void {
    window.location.href = 'http://localhost:4200/';
  }
  /**
   * Выбор сотрудника.
   * @argument {Object} person
   */
  selectRow(person: Person): void {
    this.person = person;
  }
}

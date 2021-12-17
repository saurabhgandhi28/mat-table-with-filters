import { Component } from '@angular/core';

export interface MoenyHiest {
  id: number;
  name: string;
  character:string;
  played_by:string;
  occupation:string;
  gender:string;
}

const DATA: MoenyHiest[] = [
  {id: 1, name: 'Serjio Marquina', character: 'Professor',played_by: 'Alvaro Morte',occupation: 'Heist Planner',gender: 'Male'},
  {id: 2, name: 'Andres de Fonollosa', character: 'Berlin',played_by: 'Pedro Alonsa',occupation: 'Robber',gender: 'Male'},
  {id: 3, name: 'Silene Oliveira', character: 'Tokyo',played_by: 'Ursula Corbera',occupation: 'Robber',gender: 'Female'},
  {id: 4, name: 'Agata Jimenez', character: 'Nairobi',played_by: 'Alba Flores',occupation: 'Robber',gender: 'Female'},
  {id: 5, name: 'Raquel Fuentes', character: 'Lisbon',played_by: 'Itziar Ituno',occupation: 'Police, Robber',gender: 'Female'},
  {id: 6, name: 'Daniel Ramos', character: 'Denver',played_by: 'Jaime Lorente',occupation: 'Robber',gender: 'Male'},
  {id: 7, name: 'Anibal Cortes', character: 'Rio',played_by: 'Miguel Herran',occupation: 'Robber',gender: 'Male'},
  {id: 8, name: 'Agustin Ramos', character: 'Moscow',played_by: 'Paco Tous',occupation: 'Robber',gender: 'Male'},
  {id: 9, name: 'Mirko Dragic', character: 'Helsinki',played_by: 'Darko Peric',occupation: 'Robber',gender: 'Male'},
  {id: 10, name: 'Radko Dargic', character: 'Oslo',played_by: 'Roberto Garcia',occupation: 'Robber',gender: 'Male'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mat-table-with-filters';
  displayedColumns: string[] = ['id','character','name','played_by','occupation','gender'];
  characters = DATA;
}

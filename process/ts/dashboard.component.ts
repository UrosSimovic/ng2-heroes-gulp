import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Observable<Hero[]>;

    constructor(private heroService: HeroService) {}

    ngOnInit(): void {
        this.heroes = this.heroService.getHeroes();
    }
}
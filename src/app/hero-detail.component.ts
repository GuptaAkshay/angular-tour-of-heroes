/**
 * Created by Sinner on 05-May-17.
 */

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import "rxjs/add/operator/switchMap";

import { HeroService } from "./hero.service";



@Component({
  selector: 'hero-detail',
  templateUrl: "./hero-detail.component.html"
})

export class HeroDetailComponent implements OnInit{
	
	constructor (
		private heroservice: HeroService,
		private route: ActivatedRoute,
		private location: Location
	){}
	
	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => 
			this.heroservice.getHero(+params['id'])
			.subscribe(hero => this.hero = hero)
			); 
	}
	
	goBack(): void{
		this.location.back();
	}
  @Input() hero: Hero;
}

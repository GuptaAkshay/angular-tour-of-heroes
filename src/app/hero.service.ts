/**
 * Created by Sinner on 05-May-17.
 */

import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heros";

@Injectable()

export class HeroService{
	
	getHero(id: number): Promise<Hero>{
		return this.getHeroes()
			.then(heroes => heroes.find(hero => hero.id === id));
	}
	
  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }
}

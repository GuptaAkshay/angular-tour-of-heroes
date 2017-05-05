/**
 * Created by Sinner on 05-May-17.
 */

import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import {HEROES} from "./mock-heros";

@Injectable()

export class HeroService{
  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }
}

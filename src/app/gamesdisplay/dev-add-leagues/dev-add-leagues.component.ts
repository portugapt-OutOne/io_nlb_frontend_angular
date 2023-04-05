import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

import { League } from 'src/app/interfaces/gamesdisplay/league.interface';

import { LeaguesService } from 'src/app/services/gamesdisplay/leagues.service';


@Component({
  selector: 'app-dev-add-leagues',
  templateUrl: './dev-add-leagues.component.html',
  styleUrls: ['./dev-add-leagues.component.css']
})
export class DevAddLeaguesComponent {
  // 4. Input and Output properties
  /**
   * @Output() added: EventEmitter used to emit events when a new product is added
   */
  @Output() added = new EventEmitter<League>();

  // 5. Public properties
  /**
   * leagues: An array of Product objects to store the products
   */
  leagues: League[] = [];

  /**
   * leaguesForm: FormGroup instance to manage the form controls and validation
   */
  leaguesForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    displayName: new FormControl<string>('', Validators.required),
    tournament: new FormControl<string>('', Validators.required),
  });


  // 7. Getters and Setters
  /**
   * name: Getter to access the 'name' FormControl from the leaguesForm
   */
  get name() {
    return this.leaguesForm.controls.name!;
  }

  /**
   * displayName: Getter to access the 'displayName' FormControl from the leaguesForm
   */
  get displayName() {
    return this.leaguesForm.controls.displayName!;
  }

    /**
   * tournament: Getter to access the 'tournament' FormControl from the leaguesForm
   */
  get tournament() {
      return this.leaguesForm.controls.tournament!;
    }

  // 8. Constructor
  /**
   * @param leaguesService: The Leagues Service instance to interact with leagues data
   */
  constructor(private leaguesService: LeaguesService) {
    this.loadLeagues()
  }

  // 10. Public methods
  /**
   * createProduct: Method to create a new product and emit the 'added' event
   */
  createLeague(): void {
    console.log(`this price: ${this.name.value}`);
    this.leaguesService
      .addLeague(
        this.name.value ?? '',
        this.displayName.value ?? '',
        this.tournament.value ?? ''
      )
      .subscribe((league) => {
        this.added.emit(league);
        this.leaguesForm.reset();
      });
  }

  // 11. Private methods
  /**
   * loadProducts: Method to load products using the ProductsService
   */
  private loadLeagues(): void {
    this.leaguesService.getLeagues().subscribe((leagues) => {
      this.leagues = leagues;
    });
  }


}

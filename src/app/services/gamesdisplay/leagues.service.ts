import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

import { LeagueDTO } from '../../interfaces/gamesdisplay/leagueDTO.interface'
import { League } from '../../interfaces/gamesdisplay/league.interface'

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private leaguesUrl = 'http://localhost:3000/leagues';

  private convertToLeague(league: LeagueDTO): League {
    return {
      name: league.name,
      displayName: league.displayName,
      tournament: league.tournament
    };
  }

  getLeague(name: string): Observable<League> {
    return this.http
      .get<LeagueDTO>(`${this.leaguesUrl}/${name}`)
      .pipe(map((league) => this.convertToLeague(league)));
  }

  getLeagues(): Observable<League[]> {
    return this.http.get<LeagueDTO[]>(this.leaguesUrl).pipe(
      map((leagues) =>
        leagues.map((league) => {
            return this.convertToLeague(league);
          })
      )
    );
  }


  addLeague(name: string, displayName: string, tournament: string): Observable<League> {
    console.log(`League Name: ${name}`)
    return this.http
      .post<LeagueDTO>(this.leaguesUrl, {
        name: name,
        displayName: displayName,
        tournament: tournament
      }).pipe(map((league) => this.convertToLeague(league)));
  }

  constructor(private http: HttpClient) {}
}

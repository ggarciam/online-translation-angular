import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';
import { TRANSLATE_APIS } from "./global";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class TranslateService {

    private sourceGoogle    = new BehaviorSubject('');
    private sourceYandex    = new BehaviorSubject('');
    currentTextGoogle       = this.sourceGoogle.asObservable();
    currentTextYandex       = this.sourceYandex.asObservable();
    private t_services      = TRANSLATE_APIS;

    constructor(private _http: HttpClient) { }

    getTranslation(options: any): Observable<any> {

        let url: string;

        url = this.t_services.filter(s => s.name === options.values.service)[0].url_final;

        return this._http
            .get<any>(url, {
                params: options.params
            })
            .pipe(
                tap(text => {
                    let textOutput = options.values.callBack(text);
                    this[options.values.varName].next(textOutput);
                }),
                catchError(this.handleError('getTranslation', []))
            );
    }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}

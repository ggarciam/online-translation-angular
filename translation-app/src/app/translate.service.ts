import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class TranslateService {

    private textResult = new BehaviorSubject('');
    currentText = this.textResult.asObservable();

    constructor(private _http: HttpClient) {

    }

    getServiceURL(urls:any, service: string): string {

        return urls.filter(url => url.service === service)[0].url;
    }

    getGoogleTranslation(url: string): Observable<any> {
        return this._http
            .get<any>(url)
            .pipe(
                tap(text => {
                    console.log('fetched translation ' + text[0][0][0]);
                    this.textResult.next(text[0][0][0]);
                }),
                catchError(this.handleError('getTranslation', []))
            );
    }

    getYandexTranslation(url: string): Observable<any> {
        return this._http
            .get<any>(url)
            .pipe(
                tap(text => {
                    console.log('fetched translation ' + text[0][0][0]);
                    this.textResult.next(text[0][0][0]);
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

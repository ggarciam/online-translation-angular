import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { TranslationAPI } from "./translation-service";
import { TRANSLATE_APIS } from "./global";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class TranslateService {

    private textResultGoogle    = new BehaviorSubject('');
    private textResultYandex    = new BehaviorSubject('');
    currentTextGoogle           = this.textResultGoogle.asObservable();
    currentTextYandex           = this.textResultYandex.asObservable();
    private t_services      = TRANSLATE_APIS;

    constructor(private _http: HttpClient) {

    }

    getServiceURL(urls:any, service: string): string {

        return urls.filter(url => url.service === service)[0].url;
    }

    getAPIInfo(service: string): string {
        return this.t_services.filter(s => s.name === service)[0].url_final;
    }

    getTranslation(url: string, options: any, headers: HttpHeaders, callback: any): Observable<any> {

        return this._http
            .get<any>(url, {
                headers: headers,
                params: options
            })
            .pipe(
                tap(() => {
                    callback();
                }),
                catchError(this.handleError('getTranslation', []))
            );
    }

    getGoogleTranslation(url: string, options: any): Observable<any> {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        return this._http
            .get<any>(url, {
                headers: headers,
                params: options
            })
            .pipe(
                tap(text => {
                    let textOutput = text[0][0][0];
                    if(text[0].length > 1) {
                        textOutput = '';
                        text[0].forEach( t => textOutput += t[0] );
                    }
                    this.textResultGoogle.next(textOutput);
                }),
                catchError(this.handleError('getTranslation', []))
            );
    }

    getYandexTranslation(url: string, options: any): Observable<any> {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http
            .get<any>(url, {
                headers: headers,
                params: options
            })
            .pipe(
                tap(text => {
                    this.textResultYandex.next(text.text);
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

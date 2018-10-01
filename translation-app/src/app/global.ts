import { Language } from './language';
import { TranslationAPI } from './translation-service';

export class Global {

}

export const LANGUAGES: Language[] = [
    { id: 1, name: 'English', code: 'en' },
    { id: 2, name: 'Spanish', code: 'es' },
    { id: 3, name: 'German', code: 'de' },
    { id: 4, name: 'French', code: 'fr' },
    { id: 5, name: 'Russian', code: 'ru' },
    { id: 6, name: 'Arabic', code: 'ar' }
];

export const TRANSLATE_APIS: TranslationAPI[] = [
    {
        id: 1,
        name: 'google',
        url: 'https://translate.googleapis.com/translate_a/single',
        api_key: '',
        url_final: 'https://translate.googleapis.com/translate_a/single'
    },
    {
        id: 2,
        name: 'yandex',
        url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
        api_key: 'trnsl.1.1.20180928T153728Z.d94b9b15d0fa0318.13658f32d15a78fa02b2551b5342cb1eb97995ea',
        url_final: 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180928T153728Z.d94b9b15d0fa0318.13658f32d15a78fa02b2551b5342cb1eb97995ea'
    },
    {
        id: 2,
        name: 'pons',
        url: 'https://api.pons.com/v1/dictionaries',
        api_key: '',
        url_final: 'https://api.pons.com/v1/dictionaries'
    }
];
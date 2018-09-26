import { Language } from './language';

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

export const G_TRANSLATE_URL: string = 'https://translate.googleapis.com/translate_a/single';

export const PONS_TRANSLATE_URL: string = 'https://api.pons.com/v1/dictionaries';
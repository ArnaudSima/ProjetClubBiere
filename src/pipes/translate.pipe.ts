import { Pipe, PipeTransform } from '@angular/core';
import translations from '../languageSettings.json';
import { AuthService } from '../app/Services/Auth/auth.service';
type Languages = keyof typeof translations;
type TranslationKey = keyof (typeof translations)['EN'];

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslationPipe implements PipeTransform {
  constructor(private authService: AuthService) {}
  language: Languages = this.authService.LanguagePref;

  transform(key: TranslationKey): string {
    return translations[this.authService.LanguagePref][key].toString();
  }
}

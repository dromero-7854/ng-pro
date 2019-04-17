// dependencies
import { Injectable } from '@angular/core';
// services
import { TranslateService } from '@ngx-translate/core';
// languages
import { locale as esLang } from '../../config/i18n/es';
import { locale as enLang } from '../../config/i18n/en';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public activeLang = 'es';

  constructor(private translate: TranslateService) { 
    this.translate.setTranslation(esLang.lang, esLang.data, true);
    this.translate.setTranslation(enLang.lang, enLang.data, true);
    this.translate.addLangs([esLang.lang, enLang.lang]);
  }

  public init() {
    this.activeLang = esLang.lang;
    this.translate.setDefaultLang(esLang.lang);
    this.translate.use(esLang.lang);
  }

  public setLanguage(lang: string) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}

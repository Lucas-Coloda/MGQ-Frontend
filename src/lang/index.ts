import Vue from 'vue';
import VueI18n from 'vue-i18n';

import ptBR from './pt_br.json';
import en from './en.json';
import ja from './ja.json';
import es from './es.json';

Vue.use(VueI18n);

const messages = {
  'pt-BR': ptBR,
  en: en,
  ja: ja,
  es: es,
};

const i18n = new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages: messages,
});

export default i18n;

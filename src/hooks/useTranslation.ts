import { useTheme } from '../contexts/ThemeContext';
import { translations, Language } from '../i18n/translations';

export const useTranslation = () => {
  const { language } = useTheme();
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language as Language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if no translation found
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  return { t, language };
};
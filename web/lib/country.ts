import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

countries.registerLocale(en);

export function getCountryName(code?: string | null): string | null {
  if (!code) return null;
  return countries.getName(code, "en") || code;
}

import 'intl';
import 'intl/locale-data/jsonp/vi';

const BILLION = 1000000000;
const MILLION = 1000000;
const THOUSAND = 1000;
const HUNDRED = 100;

export default class PriceUtils {
  static vndPrice = price => {
    return new Intl.NumberFormat('USD').format(+price) + ' USD';
  };

  static dPrice = price => {
    return new Intl.NumberFormat('USD').format(+price) + '$';
  };

  static vndPriceWithoutSymbol = price => {
    return new Intl.NumberFormat('USD').format(+price);
  };
}

import 'intl';
import 'intl/locale-data/jsonp/vi';

export const convertISODate = (date) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        });

    return formatter.format(new Date(date));
}
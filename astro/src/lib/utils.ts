import { format, getYear, parseISO } from 'date-fns';

export const formatDate = (_startDate: string, _endDate?: string) => {
  const startDate = parseISO(_startDate);
  if (!_endDate) {
    return `${format(startDate, 'MMMM yyyy')} - Present`;
  } else {
    const endDate = parseISO(_endDate);
    if (getYear(startDate) === getYear(endDate)) {
      return `${format(startDate, 'MMMM')} - ${format(endDate, 'MMMM yyyy')}`;
    } else {
      return `${format(startDate, 'MMMM yyyy')} - ${format(endDate, 'MMMM yyyy')}`;
    }
  }
};

const displayedformatOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric',
};

export function getDisplayedFormatedDate(date: string) {
  return new Date(date).toLocaleDateString('en-us', displayedformatOptions);
}

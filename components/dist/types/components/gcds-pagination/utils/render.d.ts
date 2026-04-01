/**
 * Function to constuct href attribute from url object
 * Also looks for ::offset and ::match to increment query string values
 */
declare function constructHref(url: any, page: number, end?: 'next' | 'previous' | null): string;
declare function constructClasses(page: number, current: number, total: number): string;
export { constructClasses, constructHref };

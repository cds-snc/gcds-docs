/**
 * Function to constuct href attribute from url object
 * Also looks for ::offset and ::match to increment query string values
 */
declare function constructHref(url: any, page: number, end?: 'next' | 'previous' | null): string;
/**
 * Function to constuct classes to help with mobile sizing
 */
declare function constructClasses(page: number, current: number, total: number): "" | "gcds-pagination-list-breakpoint-xxs" | "gcds-pagination-list-breakpoint-xs" | "gcds-pagination-list-breakpoint-sm";
export { constructClasses, constructHref };

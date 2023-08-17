/**
 * Function to constuct href attribute from url object
 * Also looks for ::offset and ::match to increment query string values
 */
declare function constructHref(url: any, page: number, end?: "next" | "previous" | null): string;
/**
 * Function to constuct classes to help with mobile sizing
 */
declare function constructClasses(page: number, current: number, total: number): "" | "gcds-pagination-list-breakpoint-360" | "gcds-pagination-list-breakpoint-420" | "gcds-pagination-list-breakpoint-488" | "gcds-pagination-list-breakpoint-460";
export { constructClasses, constructHref };

/**
 * Handle event for keyboard control of nav
 * @param {Event} event
 * @param {Element} nav
 * @param {any[]} queue
 */
export declare function handleKeyDownNav(event: any, nav: any, queue: any): Promise<void>;
/**
 * Return array of child elements of passed element
 * @param {Element} el
 * @return {any[]} indexedItems
 */
export declare function getNavItems(el: any): Promise<any[]>;

/**
 * Breadcrumbs is a path to the current page from each preceding level of the site's hierarchy.
 *
 * @slot default - Slot for the breadcrumb items.
 */
export declare class GcdsBreadcrumbs {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Defines if the default canada.ca link is displayed or omitted.
     */
    hideCanadaLink: boolean;
    /**
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}

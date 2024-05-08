import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsPagination {
    el: HTMLElement;
    private listitems;
    private mobilePrevNext;
    /**
     * Navigation element label
     */
    display: 'list' | 'simple';
    /**
     * Navigation element label
     */
    label: string;
    /**
     * Simple display - href for previous link
     */
    previousHref: string;
    /**
     * Simple display - label for previous link
     */
    previousLabel: string;
    /**
     * Simple display - href for next link
     */
    nextHref: string;
    /**
     * Simple display - lable for next link
     */
    nextLabel: string;
    /**
     * List display - Total number of pages
     */
    totalPages: number;
    /**
     * List display - Current page number
     */
    currentPage: number;
    watchCurrentPage(newValue: any): void;
    /**
     * List display - URL object to create query strings and fragment on links
     */
    url: string | object;
    urlObject: object;
    /**
     * Convert url prop to object
     * (Object props get treated as string when using Stencil components without a framework)
     */
    urlChanged(newUrl: string | object): void;
    currentStep: number;
    /**
     * Language of rendered component
     */
    lang: string;
    watchLang(): void;
    /**
     * Events
     */
    /**
     * Emitted when the link has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the link loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    /**
     * Emitted when the link has been clicked.
     */
    gcdsClick: EventEmitter<void>;
    /**
     * Function to constuct <li> and <a> tags for display="list" pagination
     */
    private configurePaginationStep;
    /**
     * Function to render the right steps for display="list" pagination
     */
    private configureListPagination;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    componentDidUpdate(): void;
    render(): any;
}

import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Search is a space for entering keywords to find relevant information.
 */
export declare class GcdsSearch {
    el: HTMLElement;
    /**
     * Set the placeholder and label for the search input. Becomes "Search [placeholder]"
     */
    placeholder: string;
    /**
     * Sets the action for the search form. Default will be canada.ca global search
     */
    action: string;
    /**
     * Set the form method of the search form
     */
    method: 'get' | 'post';
    /**
     * Set the name of the search input
     */
    name: string;
    /**
     * Set the id of the search input
     */
    searchId: string;
    /**
     * Set the value of the search input
     */
    value: string;
    /**
     * Set a list of predefined search terms
     */
    suggested: Array<string>;
    /**
     * Events
     */
    /**
     * Emitted when the search element has received input.
     */
    gcdsInput: EventEmitter<string>;
    /**
     * Emitted when the search input value has changed.
     */
    gcdsChange: EventEmitter<string>;
    /**
     * Emitted when the search input has gained focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the search input has lost focus.
     */
    gcdsBlur: EventEmitter<void>;
    /**
     * Emitted when the search form has submitted.
     */
    gcdsSubmit: EventEmitter<string>;
    /**
     * Language of rendered component
     */
    lang: string;
    private handleInput;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}

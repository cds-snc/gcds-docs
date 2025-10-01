import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Breadcrumbs item represents a single link in the breadcrumbs navigation.
 *
 * @slot default - Slot for the breadcrumb item link label.
 */
export declare class GcdsBreadcrumbsItem {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Specifies the href of the breadcrumb item.
     */
    href: string | undefined;
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
     * Emitted when the link has been clicked. Contains the href in the event detail.
     */
    gcdsClick: EventEmitter<string>;
    render(): any;
}

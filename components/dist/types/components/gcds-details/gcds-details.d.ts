import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsDetails {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * The details title summarizes the panel content.
     */
    detailsTitle: string;
    /**
     * Defines if the details panel is open by default or not.
     */
    open?: boolean;
    /**
     * Events
     */
    /**
     * Emitted when the details has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the details loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    /**
     * Emitted when the details has been clicked.
     */
    gcdsClick: EventEmitter<void>;
    /**
     * Methods
     */
    toggle(): Promise<void>;
    render(): any;
}

import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Details is an interactive switch for a person to expand or collapse content.
 *
 * @slot default - Slot for the main content of the details panel.
 */
export declare class GcdsDetails {
    el: HTMLElement;
    private detailsElement?;
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
     * Listen to beforeprint and afterprint events to handle details state
     * when printing. This ensures that the details are open when printing,
     * and closed after printing if they were closed before.
     */
    handleBeforePrint(): void;
    handleAfterPrint(): void;
    /**
     * Methods
     */
    toggle(): Promise<void>;
    private handleToggle;
    render(): any;
}

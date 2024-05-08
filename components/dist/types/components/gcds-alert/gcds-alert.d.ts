import { EventEmitter } from '../../stencil-public-runtime';
export declare class GcdsAlert {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Defines alert role.
     */
    alertRole?: 'danger' | 'info' | 'success' | 'warning';
    /**
     * Defines the max width of the alert content.
     */
    container?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    /**
     * Defines the alert heading.
     */
    heading: string;
    /**
     * Defines if the alert's close button is displayed or not.
     */
    hideCloseBtn?: boolean;
    /**
     * Defines if the alert's role icon is displayed or not.
     */
    hideRoleIcon?: boolean;
    /**
     * Defines if the alert's position is fixed.
     */
    isFixed?: boolean;
    /**
     * States
     */
    /**
     * Specifies if the alert is open or not.
     */
    isOpen: boolean;
    /**
     * Language of rendered component
     */
    lang: string;
    /**
     * Events
     */
    gcdsDismiss: EventEmitter<void>;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}

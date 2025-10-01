import { SpacingValues } from '../../utils/types/spacing';
/**
 * A container is a basic box layout with a set width for its contents.
 *
 * @slot default - Slot for the main content of the container.
 */
export declare class GcdsContainer {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Defines if the container has a border.
     */
    border?: boolean;
    /**
     * Defines if the container is centered.
     */
    centered?: boolean;
    /**
     * Defines if the container is the main page container. When true,
     * the width will be set to 90% for smaller screens to ensure consistency
     * with the responsiveness of other core layout components (header + footer).
     */
    mainContainer?: boolean;
    /**
     * Container margin. Left and right margins won't be applied
     * if the container is centered.
     */
    margin?: SpacingValues;
    /**
     *  Defines the container's padding.
     */
    padding?: SpacingValues;
    /**
     * Defines container size.
     */
    size?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    /**
     * Set tag for container.
     */
    tag?: string;
    render(): any;
}

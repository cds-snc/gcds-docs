export declare class GcdsStepper {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Defines the current step.
     */
    currentStep: number;
    validateCurrentStep(): void;
    /**
     * Defines the total amount of steps.
     */
    totalSteps: number;
    validateTotalSteps(): void;
    /**
     * Defines the heading tag to render
     */
    tag: 'h1' | 'h2' | 'h3';
    /**
     * State to track validation on properties
     * Contains a list of properties that have an error associated with them
     */
    errors: Array<string>;
    /**
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    private validateChildren;
    private validateRequiredProps;
    componentWillLoad(): Promise<void>;
    render(): any;
}

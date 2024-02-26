export declare class GcdsStepper {
    el: HTMLElement;
    /**
     * Props
     */
    /**
     * Defines the current step.
     */
    currentStep: number;
    /**
     * Defines the total amount of steps.
     */
    totalSteps: number;
    /**
     * Language of rendered component
     */
    lang: string;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}

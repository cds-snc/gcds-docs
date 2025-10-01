import { EventEmitter } from '../../stencil-public-runtime';
import { Validator, ValidatorEntry } from '../../validators';
/**
 * A file uploader is a space to select and add supporting documentation.
 */
export declare class GcdsFileUploader {
    el: HTMLElement;
    internals: ElementInternals;
    private shadowElement?;
    _validator: Validator<unknown>;
    /**
     * Props
     */
    /**
     * Id attribute for a file uploader element.
     */
    uploaderId: string;
    /**
     * Name attribute for file input element.
     */
    name: string;
    /**
     * Form field label.
     */
    label: string;
    /**
     * Specifies if a form field is required or not.
     */
    required: boolean;
    /**
     * Specifies if a file uploader element is disabled or not.
     */
    disabled: boolean;
    validateDisabledSelect(): void;
    /**
     * Value for a file uploader element.
     */
    value: string[];
    /**
     * Defines the file types the file uploader accepts.
     */
    accept: string;
    /**
     * Boolean that specifies if the user is allowed to select more than one file.
     */
    multiple: boolean;
    /**
     * FileList of uploaded files to input
     */
    files: FileList;
    watchFiles(): void;
    /**
     * Error message for an invalid file uploader element.
     */
    errorMessage: string;
    validateErrorMessage(): void;
    /**
     * Hint displayed below the label.
     */
    hint: string;
    /**
     * Array of validators
     */
    validator: Array<string | ValidatorEntry | Validator<string | number | FileList>>;
    validateValidator(): void;
    /**
     * Set event to call validator
     */
    validateOn: 'blur' | 'submit' | 'other';
    /**
     * Specifies if the file uploader is invalid.
     */
    hasError: boolean;
    validateHasError(): void;
    /**
     * Set additional HTML attributes not available in component properties
     */
    inheritedAttributes: Object;
    /**
     * Language of rendered component
     */
    lang: string;
    /**
     * Events
     */
    /**
     * Emitted when the uploader has focus.
     */
    gcdsFocus: EventEmitter<void>;
    /**
     * Emitted when the uploader loses focus.
     */
    gcdsBlur: EventEmitter<void>;
    private onBlur;
    /**
     * Emitted when the user has made a file selection. Contains the new value in the event detail.
     */
    gcdsChange: EventEmitter<string[]>;
    /**
     * Emitted when the user has uploaded a file. Contains the new value in the event detail.
     */
    gcdsInput: EventEmitter<string[]>;
    private handleInput;
    /**
     * Remove file and update value.
     */
    gcdsRemoveFile: EventEmitter;
    removeFile: (e: any) => void;
    /**
     * Call any active validators
     */
    validate(): Promise<void>;
    /**
     * Emitted when the uploader has a validation error.
     */
    gcdsError: EventEmitter<object>;
    /**
     * Emitted when the uploader has a validation error.
     */
    gcdsValid: EventEmitter<object>;
    submitListener(e: any): void;
    formResetCallback(): void;
    formStateRestoreCallback(state: any): void;
    private addFilesToFormData;
    private handleDrop;
    updateLang(): void;
    componentWillLoad(): Promise<void>;
    render(): any;
}

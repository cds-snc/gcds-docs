declare const _default: {
    title: string;
    argTypes: {
        detailsTitle: {
            name: string;
            control: string;
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: string;
                };
            };
            type: {
                required: boolean;
            };
        };
        open: {
            control: {
                type: string;
            };
            options: boolean[];
            table: {
                type: {
                    summary: string;
                };
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        default: {
            control: {
                type: string;
            };
            description: string;
            table: {
                category: string;
            };
        };
    };
};
export default _default;
export declare const Default: any;
export declare const Open: any;
export declare const Props: any;
export declare const Playground: any;

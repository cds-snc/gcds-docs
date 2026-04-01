import { langProp } from "../../../utils/storybook/component-properties";
export default {
    title: 'Components/Alert',
    argTypes: Object.assign(Object.assign({
        // Props
        alertRole: {
            name: 'alert-role',
            control: { type: 'select' },
            options: ['success', 'danger', 'info', 'warning'],
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'info' },
            },
        }, container: {
            name: 'container',
            control: { type: 'select' },
            options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'],
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'full' },
            },
        }, heading: {
            name: 'heading',
            control: 'text',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '-' },
            },
            type: {
                required: true,
            },
        }, hideCloseBtn: {
            name: 'hide-close-btn',
            control: { type: 'select' },
            options: [false, true],
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        }, hideRoleIcon: {
            name: 'hide-role-icon',
            control: { type: 'select' },
            options: [false, true],
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        }, isFixed: {
            name: 'is-fixed',
            control: { type: 'select' },
            options: [false, true],
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: false },
            },
        }
    }, langProp), {
        // Slots
        default: {
            control: {
                type: 'text',
            },
            description: 'Customize the content or include additional elements. | Personnalisez le contenu ou ajoutez des éléments supplémentaires.',
            table: {
                category: 'Slots | Fentes',
            },
        }
    }),
};
class GcdsAlertArg {
    constructor() {
        this.alertRole = 'info';
        this.container = 'full';
        this.hideRoleIcon = false;
        this.isFixed = false;
        this.hideCloseBtn = false;
    }
}
const Template = (args) => `
<!-- Web component code (HTML, Angular, Vue) -->
<gcds-alert alert-role="${args.alertRole}" container="${args.container}" heading="${args.heading}" hide-close-btn="${args.hideCloseBtn}" hide-role-icon="${args.hideRoleIcon}" is-fixed="${args.isFixed}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
    ${args.default.trim() != '' ? `${args.default}` : null}
</gcds-alert>

<!-- React code -->
<GcdsAlert alertRole="${args.alertRole}" container="${args.container}" heading="${args.heading}" hideCloseBtn="${args.hideCloseBtn}" hideRoleIcon="${args.hideRoleIcon}" isFixed="${args.isFixed}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
    ${args.default.trim() != '' ? `${args.default}` : null}
</GcdsAlert>
`.replace(/ null/g, '');
const TemplatePlayground = (args) => `
<gcds-alert alert-role="${args.alertRole}" container="${args.container}" heading="${args.heading}" hide-close-btn="${args.hideCloseBtn}" hide-role-icon="${args.hideRoleIcon}" is-fixed="${args.isFixed}" ${args.lang != 'en' ? `lang="${args.lang}"` : null}>
    ${args.default.trim() != '' ? `${args.default}` : null}
</gcds-alert>
`;
// ------ Alert default ------
//
export const Default = Template.bind({});
Default.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'full',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: false,
    default: 'Message.',
    lang: 'en',
};
// ------ Alert success ------
export const Success = Template.bind({});
Success.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'full',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: false,
    default: 'Message.',
    lang: 'en',
};
// ------ Alert danger ------
export const Danger = Template.bind({});
Danger.args = {
    alertRole: 'danger',
    heading: 'Title',
    container: 'full',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: false,
    default: 'Message.',
    lang: 'en',
};
// ------ Alert info ------
export const Info = Template.bind({});
Info.args = {
    alertRole: 'info',
    heading: 'Title',
    container: 'full',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: false,
    default: 'Message.',
    lang: 'en',
};
// ------ Alert warning ------
export const Warning = Template.bind({});
Warning.args = {
    alertRole: 'warning',
    heading: 'Title',
    container: 'full',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: false,
    default: 'Message.',
    lang: 'en',
};
// ------ Container Full ------
export const ContainerFull = Template.bind({});
ContainerFull.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'full',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: true,
    default: 'Message.',
    lang: 'en',
};
// ------ Container XL ------
export const ContainerXl = Template.bind({});
ContainerXl.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'xl',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: true,
    default: 'Message.',
    lang: 'en',
};
// ------ Container LG ------
export const ContainerLg = Template.bind({});
ContainerLg.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'lg',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: true,
    default: 'Message.',
    lang: 'en',
};
// ------ Container MD ------
export const ContainerMd = Template.bind({});
ContainerMd.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'md',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: true,
    default: 'Message.',
    lang: 'en',
};
// ------ Container SM ------
export const ContainerSm = Template.bind({});
ContainerSm.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'sm',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: true,
    default: 'Message.',
    lang: 'en',
};
// ------ Container XS ------
export const ContainerXs = Template.bind({});
ContainerXs.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'xs',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: true,
    default: 'Message.',
    lang: 'en',
};
// ------ HideCloseBtn ------
export const HideCloseBtn = Template.bind({});
HideCloseBtn.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'full',
    hideCloseBtn: true,
    hideRoleIcon: false,
    isFixed: false,
    default: 'Message.',
    lang: 'en',
};
// ------ HideCloseBtn ------
export const HideRoleIcon = Template.bind({});
HideRoleIcon.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'full',
    hideCloseBtn: false,
    hideRoleIcon: true,
    isFixed: false,
    default: 'Message.',
    lang: 'en',
};
// ------ Alert events & props ------
export const Props = Template.bind({});
Props.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'full',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: false,
    default: 'Message.',
    lang: 'en',
};
// ------ Alert playground ------
export const Playground = TemplatePlayground.bind({});
Playground.args = {
    alertRole: 'success',
    heading: 'Title',
    container: 'full',
    hideCloseBtn: false,
    hideRoleIcon: false,
    isFixed: false,
    default: 'Message.',
    lang: 'en',
};
//# sourceMappingURL=gcds-alert.stories.js.map

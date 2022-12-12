
import DateTimeComponent from "../components/datetime-component";

export default {
    title: 'Feedback/DateTimeComponent',
    component: DateTimeComponent,
    argTypes: {
        variant: {
            options: ['dateonly', 'datetime','timeonly','calendar'],
            control: { type: 'radio' },
        },
    },
};

const Template = (args) => <DateTimeComponent {...args}></DateTimeComponent>;

export const Default = Template.bind({});

Default.args = {
    disabled: false,
    disableFuture: false,
    disableHighlightToday: false,
    disableMaskedInput: false,
    disableOpenPicker: false,
    disablePast: false,
    maxDate: '',
    minDate: '',
    open: false,
    orientation: 'landscape',
    openTo: 'day',
    readOnly: false,
    views: ['year','day'],
    label: 'Basic Exampe',
    variant: 'dateonly',
    ampm: false,
    ampmInClock: false,
    disableIgnoringDatePartForTimeValidation:false,
    minTime:'',
    maxTime: '',
    minutesStep: 1,
    calendarr: 1,
}
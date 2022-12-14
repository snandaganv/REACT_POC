import Dialog from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
    DialogsSimple,
    DialogsAlert,
    DialogsSlideAlert,
    DialogsForm,
    DialogsCustomized,
    DialogsFullScreen,
    DialogsMaxWidth,
    DialogsConfirmation,
    DialogsScroll
} from "../components/dialog-component";


export default {
    title: 'Feedback/Dialog',
    component: Dialog,
};


const DialogsSimpleTemplate = (args) => <DialogsSimple {...args}></DialogsSimple>
export const DialogSimple = DialogsSimpleTemplate.bind({});
DialogSimple.args = {
    label: "Open simple dialog",
    fullScreen: false,
    fullWidth: false,
    disableEscapeKeyDown: false,
};

const DialogsAlertTemplate = (args) => <DialogsAlert {...args}></DialogsAlert>
export const DialogAlert = DialogsAlertTemplate.bind({});
DialogAlert.args = {
    label: " Open alert dialog",
    disableSpacing: false,
    dividers: false,
    labelledby: "Use Google's location service?",
    describedby: " Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
    alerttextdisagree: "Disagree",
    alerttextagree: "Agree",

};
const DialogsSlideAlertTemplate = (args) => <DialogsSlideAlert {...args}></DialogsSlideAlert>
export const DialogSlideAlert = DialogsSlideAlertTemplate.bind({});
DialogSlideAlert.args = {
    label: "  Slide in alert dialog",
    labelledby: "Use Google's location service?",
    describedby: " Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
    alerttextdisagree: "Disagree",
    alerttextagree: "Agree",
};
const DialogsFormTemplate = (args) => <DialogsForm {...args}></DialogsForm>
export const DialogForm = DialogsFormTemplate.bind({});
DialogForm.args = {
    label: "Open form dialog  ",
    alerttextdisagree: "Cancel",
    alerttextagree: "Subscribe",
    describedby: "To subscribe to this website, please enter your email address here. We will send updates occasionally."
};
const DialogsCustomizedTemplate = (args) => <DialogsCustomized {...args}></DialogsCustomized>
export const DialogCustomized = DialogsCustomizedTemplate.bind({});
DialogCustomized.args = {
    label: "Open dialog",
    dialogtypo: [

        { id: 0, label: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta acconsectetur ac, vestibulum at eros." },
        { label: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." },
        { label: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donecullamcorper nulla non metus auctor fringilla." }
    ],
    dialogtitle: [{ id: 1, variant: 'h5', text: 'Modal title' }],
    dividers: true,
    submit: "Save Changes",

}
const DialogsFullScreenTemplate = (args) => <DialogsFullScreen {...args}></DialogsFullScreen>
export const DialogFullScreen = DialogsFullScreenTemplate.bind({});
DialogFullScreen.args = {
    label: "Open full-screen dialog",
    // dialogfulltitle: [{ id: 2, variant: 'h6', text: 'Sound' }],
    //save: "Save",
    // icon: <CloseIcon />,
    dataList: [{ id: 5, primary: 'Phone ringtone', secondary: 'Titania' }, { id: 6, primary: 'Default notification ringtone', secondary: 'Tethys' }],
    data: [
        {
            icon: <CloseIcon />,
            araiLable: 'close',
        },
        {
            text: 'Sound',
            varaint: 'h6',
        },
        {
            buttontxt: 'Save',

        }

    ]
};
const DialogsMaxWidthTemplate = (args) => <DialogsMaxWidth {...args}></DialogsMaxWidth>
export const DialogMaxWidth = DialogsMaxWidthTemplate.bind({});
DialogMaxWidth.args = {
    label: "Open max-width dialog",
    content: "You can set my maximum width and whether to adapt or not.",
    dialogmaxtitle: [{ id: 1, variant: 'h5', text: 'Optional Sizes' }],
    selectoptions: [{ id: 3, value: 'false', label: 'false' }, { value: 'xs', label: 'xs' }, { value: 'sm', label: 'sm' }, { value: 'md', label: 'md' }, { value: 'lg', label: 'lg' }, { value: 'xl', label: 'xl' }],
    switchlabel: "label"
};

const DialogsConfirmationTemplate = (args) => <DialogsConfirmation {...args}></DialogsConfirmation>
export const DialogConfirmation = DialogsConfirmationTemplate.bind({});
DialogConfirmation.args = {
    options: [{ id: 4, option: 'None' }, { option: 'Atria' }, { option: 'Callisto' }, { option: 'Dione' }, { option: 'Ganymede' }, { option: 'Hangouts Call' }, { option: 'Luna' }, { option: 'Oberon' }, { option: 'Phobos' }, { option: 'Pyxis' }, { option: 'Sedna' }, { option: 'Titania' }, { option: 'Triton' }, { option: 'Umbriel' },],
    cancelbtn: "Cancel",
    okbtn: "ok"
};


const DialogsScrollTemplate = (args) => <DialogsScroll {...args}></DialogsScroll>
export const DialogScroll = DialogsScrollTemplate.bind({});
DialogScroll.args = {
    label: "scroll=paper",
    disableSpacing: false,
    alerttextdisagree: "Cancel",
    alerttextagree: "Subscribe",
};
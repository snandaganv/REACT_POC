import Dialog from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {
    SimpleDialogs,
    AlertDialogs,
    AlertDialogSlides,
    FormDialogs,
    CustomizedDialogs,
    FullScreenDialogs,
    MaxWidthDialogs,
    ConfirmationDialogs,
    DraggableDialogs,
    ScrollDialogs
} from "../components/dialog-component";


export default {
    title: 'Feedback/Dialog',
    component: Dialog,
};


export const SimpleDialog = SimpleDialogs.bind({});
SimpleDialog.args = {
    label: "Open simple dialog",
    //dialogheader: [{ label: "Set backup account" }],
    fullScreen: false,
    fullWidth: false,
    //divider: false,
    disableEscapeKeyDown: false,



};

export const AlertDialog = AlertDialogs.bind({});
AlertDialog.args = {
    label: " Open alert dialog",
    disableSpacing: false,
    dividers: false,
    labelledby: "Use Google's location service?",
    describedby: " Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
    alerttextdisagree: "Disagree",
    alerttextagree: "Agree",

};
export const AlertDialogSlide = AlertDialogSlides.bind({});
AlertDialogSlide.args = {
    label: "  Slide in alert dialog",
    labelledby: "Use Google's location service?",
    describedby: " Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
    alerttextdisagree: "Disagree",
    alerttextagree: "Agree",
};
export const FormDialog = FormDialogs.bind({});
FormDialog.args = {
    label: "Open form dialog  ",
    alerttextdisagree: "Cancel",
    alerttextagree: "Subscribe",
    describedby: "To subscribe to this website, please enter your email address here. We will send updates occasionally."
};
export const CustomizedDialog = CustomizedDialogs.bind({});
CustomizedDialog.args = {
    label: "Open dialog",
    dialogtypo: [
        { label: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta acconsectetur ac, vestibulum at eros." },
        { label: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." },
        { label: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donecullamcorper nulla non metus auctor fringilla." }
    ],
    dividers: true,
    submit: "Save Changes",

}
export const FullScreenDialog = FullScreenDialogs.bind({});
FullScreenDialog.args = {
    label: "Open full-screen dialog",
};
export const MaxWidthDialog = MaxWidthDialogs.bind({});
MaxWidthDialog.args = {
    label: "Open max-width dialog",
    content: "You can set my maximum width and whether to adapt or not.",
    selectoptions: [{ value: 'xs', label: 'xs' }, { value: 'sm', label: 'sm' }, { value: 'md', label: 'md' }, { value: 'lg', label: 'lg' }, { value: 'xl', label: 'xl' }],
};

export const ConfirmationDialog = ConfirmationDialogs.bind({});
ConfirmationDialog.args = {
    options: [{ option: 'None' }, { option: 'Atria' }, { option: 'Callisto' }, { option: 'Dione' }, { option: 'Ganymede' }, { option: 'Hangouts Call' }, { option: 'Luna' }, { option: 'Oberon' }, { option: 'Phobos' }, { option: 'Pyxis' }, { option: 'Sedna' }, { option: 'Titania' }, { option: 'Triton' }, { option: 'Umbriel' },],
};
export const DraggableDialog = DraggableDialogs.bind({});
DraggableDialog.args = {
    label: "Open draggable dialog",
    disableSpacing: false,
};
export const ScrollDialog = ScrollDialogs.bind({});
ScrollDialog.args = {
    label: "scroll=paper",
    disableSpacing: false,
    alerttextdisagree: "Cancel",
    alerttextagree: "Subscribe",
};
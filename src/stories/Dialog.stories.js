import Dialog from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  DialogsSimple,
  DialogsAlert,
  DialogsSlideAlert,
  DialogsForm,
  DialogsCustomized,
  DialogsFullScreen,
  DialogsMaxWidth,
  DialogsConfirmation,
  DialogsScroll,
} from "../components/dialog-component";

export default {
  title: "Feedback/Dialog",
  component: Dialog,
};

const DialogsSimpleTemplate = (args) => (
  <DialogsSimple {...args}></DialogsSimple>
);
export const DialogSimple = DialogsSimpleTemplate.bind({});
DialogSimple.args = {
  label: "Open simple dialog",
  fullScreen: false,
  fullWidth: false,
  disableEscapeKeyDown: false,
};

const HowToConsumeDialogComponent = (props) => (
  <div>
    <code>
      This is how to consume the AGCP-UI Dialog component ,just pass in the
      props when using the component .
    </code>
    <br />
    <br />
    <code>import {"{DialogSimple}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>import {"{DialogAlert}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>import {"{DialogSlideAlert}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>import {"{DialogForm}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>import {"{DialogCustomized}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>import {"{DialogFullScreen}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>import {"{DialogMaxWidth}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>import {"{DialogConfirmation}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <code>import {"{DialogScroll}"} from "@arisglobal/agcp-ui" ;</code>
    <br />
    <br />
    <code>&lt;DialogSimple {"{...props}"}&gt;&lt;/DialogSimple&gt;</code>
    <br />
    <code>&lt;DialogAlert {"{...props}"}&gt;&lt;/DialogAlert&gt;</code>
    <br />
    <code>
      &lt;DialogSlideAlert {"{...props}"}&gt;&lt;/DialogSlideAlert&gt;
    </code>
    <br />
    <code>&lt;DialogForm {"{...props}"}&gt;&lt;/DialogForm&gt;</code>
    <code>
      <br />
      &lt;DialogCustomized {"{...props}"}&gt;&lt;/DialogCustomized&gt;
    </code>
    <br />
    <code>
      &lt;DialogFullScreen {"{...props}"}&gt;&lt;/DialogFullScreen&gt;
    </code>
    <br />
    <code>&lt;DialogMaxWidth {"{...props}"}&gt;&lt;/DialogMaxWidth&gt;</code>
    <br />
    <code>
      &lt;DialogConfirmation {"{...props}"}&gt;&lt;/DialogConfirmation&gt;
    </code>
    <br />
    <code>&lt;DialogScroll {"{...props}"}&gt;&lt;/DialogScroll&gt;</code>
  </div>
);
const TemplateDemo = (args) => (
  <HowToConsumeDialogComponent {...args}></HowToConsumeDialogComponent>
);
export const HowToConsumeDialogComponents = TemplateDemo.bind({});

const DialogsAlertTemplate = (args) => <DialogsAlert {...args}></DialogsAlert>;
export const DialogAlert = DialogsAlertTemplate.bind({});
DialogAlert.args = {
  label: " Open alert dialog",
  disableSpacing: false,
  dividers: false,
  labelledby: "Use Google's location service?",
  describedby:
    " Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
  alerttextdisagree: "Disagree",
  alerttextagree: "Agree",
};
const DialogsSlideAlertTemplate = (args) => (
  <DialogsSlideAlert {...args}></DialogsSlideAlert>
);
export const DialogSlideAlert = DialogsSlideAlertTemplate.bind({});
DialogSlideAlert.args = {
  label: "  Slide in alert dialog",
  labelledby: "Use Google's location service?",
  describedby:
    " Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
  alerttextdisagree: "Disagree",
  alerttextagree: "Agree",
};
const DialogsFormTemplate = (args) => <DialogsForm {...args}></DialogsForm>;
export const DialogForm = DialogsFormTemplate.bind({});
DialogForm.args = {
  label: "Open form dialog  ",
  alerttextdisagree: "Cancel",
  alerttextagree: "Subscribe",
  describedby:
    "To subscribe to this website, please enter your email address here. We will send updates occasionally.",
};
const DialogsCustomizedTemplate = (args) => (
  <DialogsCustomized {...args}></DialogsCustomized>
);
export const DialogCustomized = DialogsCustomizedTemplate.bind({});
DialogCustomized.args = {
  label: "Open dialog",
  dialogtypo: [
    {
      label:
        "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta acconsectetur ac, vestibulum at eros.",
    },
    {
      label:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    },
    {
      label:
        "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donecullamcorper nulla non metus auctor fringilla.",
    },
  ],
  dividers: true,
  submit: "Save Changes",
};
const DialogsFullScreenTemplate = (args) => (
  <DialogsFullScreen {...args}></DialogsFullScreen>
);
export const DialogFullScreen = DialogsFullScreenTemplate.bind({});
DialogFullScreen.args = {
  label: "Open full-screen dialog",
};
const DialogsMaxWidthTemplate = (args) => (
  <DialogsMaxWidth {...args}></DialogsMaxWidth>
);
export const DialogMaxWidth = DialogsMaxWidthTemplate.bind({});
DialogMaxWidth.args = {
  label: "Open max-width dialog",
  content: "You can set my maximum width and whether to adapt or not.",
  selectoptions: [
    { value: "xs", label: "xs" },
    { value: "sm", label: "sm" },
    { value: "md", label: "md" },
    { value: "lg", label: "lg" },
    { value: "xl", label: "xl" },
  ],
};

const DialogsConfirmationTemplate = (args) => (
  <DialogsConfirmation {...args}></DialogsConfirmation>
);
export const DialogConfirmation = DialogsConfirmationTemplate.bind({});
DialogConfirmation.args = {
  options: [
    { option: "None" },
    { option: "Atria" },
    { option: "Callisto" },
    { option: "Dione" },
    { option: "Ganymede" },
    { option: "Hangouts Call" },
    { option: "Luna" },
    { option: "Oberon" },
    { option: "Phobos" },
    { option: "Pyxis" },
    { option: "Sedna" },
    { option: "Titania" },
    { option: "Triton" },
    { option: "Umbriel" },
  ],
};

const DialogsScrollTemplate = (args) => (
  <DialogsScroll {...args}></DialogsScroll>
);
export const DialogScroll = DialogsScrollTemplate.bind({});
DialogScroll.args = {
  label: "scroll=paper",
  disableSpacing: false,
  alerttextdisagree: "Cancel",
  alerttextagree: "Subscribe",
};

import "../index.css";

export { default as AlertComponent } from "./alert-component";
export { default as AvatarComponent } from "./avatar-component";
export { default as BasicTable } from "./basic-table";
export { default as BreadcrumbsComponent } from "./breadcrumbs-component";
export { default as DataTable } from "./data-table";
export { default as IconComponent } from "./icon-component";
export { default as LinkComponent } from "./link-component";
export { default as TabsComponent } from "./tabs-component";
export { default as MenuIcon } from "./menu-icons-component";
export { default as SearchIconsComponent } from "./search-icons-component";
export { default as TextFieldComponent } from "./textfield-component";

/* Please rename duplicate names in the source files
i.e. Basics, Colors, Sizes are used in Button, Switches, Checkbox
*/
export {
  ButtonDefaults as ButtonDefault,
  ButtonBasics as ButtonBasic,
  ButtonColors as ButtonColor,
  ButtonSizes as ButtonSize,
  ButtonHandingClick as ButtonHandingClicks,
  ButtonIconLabelButton as ButtonIconLabelButtons,
  ButtonLoadings as ButtonLoading,
} from "./Button";

export {
  ChipsBasics as ChipsBasic,
  ChipClickables as ChipClickable,
  ChipsColors as ChipsColor,
  ChipSizes as ChipSize,
  ChipAvatars as ChipAvatar,
  ChipIcons as ChipIcon,
  ChipDoneDeleteIcons as ChipDoneDeleteIcon,
  ChipClickableAndDeletables as ChipClickableAndDeletable,
  ChipClickableLinks as ChiplickableLink,
} from "./Chip";

export {
  CheckBoxBasics as CheckBoxBasic,
  CheckboxSizes as CheckboxSize,
  CheckboxColors as CheckboxColor,
  CheckboxGroup as CheckboxGroups,
  CheckboxFormGroups as CheckboxFormGroup,
  CheckboxInderterminate as CheckboxInderterminates,
  CheckboxLabelsPlacement as CheckboxLabelsPlacements,
} from "./Checkbox";

export {
  RadioButtonBasics as RadioButtonBasic,
  RadiosButtonGroup as RadiosButtonGroups,
  RadioButtonDirection as RadioButtonDirections,
  RadioButtonControlleds as RadioButtonControlled,
  RadioButtonSize as RadioButtonSizes,
  RadioButtonColor as RadioButtonColors,
  RadioButtonLabelPlacements as RadioButtonLabelPlacement,
  RadioButtonShowErrors as RadioButtonShowError,
} from "./RadioButton";

export {
  Switches as Switchs,
  SwitchesBasics as SwitchesBasic,
  SwitchLabels as SwitchLabel,
  SwitchSizes as SwitchSize,
  SwitchColors as SwitchColor,
  SwitchControlles as SwitchControlled,
  SwitchFormGroups as SwitchFormGroup,
  SwitchCustomizations as SwitchCustomization,
  SwitchLabelsPlacement as SwitchLabelsPlacements,
} from "./Switches";

export {
  ToggleButtons as ToggleButtonBasic,
  ToggleButtonSize as ToggleButtonSizes,
  ToggleButtonColor as ToggleButtonColors,
  ToggleButtonOrientation as ToggleButtonOrientations,
  ToggleButtonExclusiveSelections as ToggleButtonExclusiveSelection,
  ToggleButtonMultipleSelections as ToggleButtonMultipleSelection,
} from "./ToggleButton";
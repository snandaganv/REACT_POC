import '../index.css'

export {default as AlertComponent} from './alert-component'
export {default as AvatarComponent} from './avatar-component'
export {default as BasicTable} from './basic-table'
export {default as BreadcrumbsComponent} from './breadcrumbs-component'
export {default as DataTable} from './data-table'
export {default as IconComponent} from './icon-component'
export {default as LinkComponent} from './link-component'
export {default as MenuIcon} from './menu-icons-component'
export {default as SearchIconsComponent} from './search-icons-component'
export {default as TextFieldComponent} from './textfield-component'

/* Please rename duplicate names in the source files
i.e. Basics, Colors, Sizes are used in Button, Switches, Checkbox
*/
export {
    Defaults as ButtonDefaults, 
    Basics as ButtonBasics, 
    Colors as ButtonColors, 
    Sizes as ButtonSizes, 
    HandingClick as ButtonHandingClick, 
    IconLabelButton as ButtonIconLabelButton, 
    Loadings as ButtonLoadings
} from './Button'

export {
    CheckBoxes as CheckBoxes, 
    BasicCheckbox as BasicCheckbox,
    Label as CheckboxLabel,
    Sizes as CheckboxSizes,
    Colors as CheckboxColors,
    Group as CheckboxGroup,
    FormGroups as CheckboxFormGroups,
    Inderterminate as CheckboxInderterminate,
    LabelsPlacement as CheckboxLabelsPlacement,
} from './Checkbox'

export {
    Basics as RadioButtonBasics,
    RadiosGroups as RadiosGroups,
    Direction as RadioButtonDirection,
    Controlleds as RadioButtonControlleds,
    Size as RadioButtonSize,
    Color as RadioButtonColor,
    LabelPlacements as RadioButtonLabelPlacements,
    ShowErrors as RadioButtonShowErrors,
} from './RadioButton'

export {
    Switches as Switches,
    BasicsSwitches as BasicsSwitches,
    Labels as SwitchLabels,
    Sizes as SwitchSizes,
    Colors as SwitchColors,
    Controlles as SwitchControlles,
    SwitchFormGroups as SwitchFormGroups,
    Customizations as SwitchCustomizations,
    LabelsPlacement as SwitchLabelsPlacement,
    SwitchSizeColor as SwitchSizeColor,
    LabelPlacements as SwitchLabelPlacements,
} from './Switches'

export {
    ToggleButtons as ToggleButtons,
    Size as ToggleButtonSize,
    Color as ToggleButtonColor,
    Orientation as ToggleButtonOrientation,
    ExclusiveSelections as ToggleButtonExclusiveSelections,
    MultipleSelections as ToggleButtonMultipleSelections,
} from './ToggleButton'
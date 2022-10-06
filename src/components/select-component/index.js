import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import { PropTypes } from "prop-types";
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import ListSubheader from '@mui/material/ListSubheader';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';



const age = [
    'Option 1',
    'Option 2',
    'Option 3',
];
const autowidth = [
    'Option',
    'Option two',
    'Option one and a two',
]

export const DefaultSelects = ({
    props,
    variant,
    disabled,
    error,
    size,
    required,
    selectname,
    selectoptions,
}) => {

    const theme = useTheme();
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <div>
            <ThemeProvider theme={muiTheme}>
                <FormControl fullWidth disabled={disabled} size={size} error={error} required={required}>
                    <InputLabel id="demo-simple-select-label">{selectname.map((item) => { return item.label })}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        variant={variant}
                        label="Age"
                        onChange={handleChange}

                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </ThemeProvider>
        </div>
    );
}
DefaultSelects.propTypes = {
    selectname: PropTypes.array,
    variant: PropTypes.oneOf(["standard", "filled"]),
    //size: PropTypes.oneOf(["small"]),
    // label: PropTypes.string,



};

export const SelectBasics = ({ size, props, selectname }) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <ThemeProvider theme={muiTheme}>
                <FormControl sx={{ m: 1, width: 300 }} size={size}>
                    <InputLabel id="demo-simple-select-label">{selectname.map((item) => { return item.label })}</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}

                    >
                        {age.map((age) => (
                            <MenuItem
                                key={age}
                                value={age}
                                style={getStyles(age, personName, theme)}
                            >
                                {age}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </ThemeProvider>
        </div>
    );
}

export const SelectVariants = ({ props, selectname }) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <ThemeProvider theme={muiTheme}>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">{selectname.map((item) => { return item.label })}</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={personName}
                        onChange={handleChange}
                        label="Age"

                    >
                        {age.map((age) => (
                            <MenuItem
                                key={age}
                                value={age}
                                style={getStyles(age, personName, theme)}
                            >
                                {age}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </ThemeProvider>
            <ThemeProvider theme={muiTheme}>

                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-filled-label">{selectname.map((item) => { return item.label })}</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={personName}
                        label="Age"
                        onChange={handleChange}

                    >
                        {age.map((age) => (
                            <MenuItem
                                key={age}
                                value={age}
                                style={getStyles(age, personName, theme)}
                            >
                                {age}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </ThemeProvider>
        </div>
    );
}
export const SelectLabels = ({ }) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value)
    };
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Without label</FormHelperText>
            </FormControl>
        </div>
    );
}

export const SelectAutoWidt = ({ props, selectname }) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">{selectname.map((item) => { return item.label })}</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={personName}
                    onChange={handleChange}
                    autoWidth
                    label="Age"

                >
                    {autowidth.map((autowidth) => (
                        <MenuItem
                            key={autowidth}
                            value={autowidth}
                            style={getStyles(autowidth, personName, theme)}
                        >
                            {autowidth}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export const SelectSizes = ({ }) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <ThemeProvider theme={muiTheme}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Age</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={personName}
                    label="Age"
                    onChange={handleChange}

                >
                    {age.map((age) => (
                        <MenuItem
                            key={age}
                            value={age}
                            style={getStyles(age, personName, theme)}
                        >
                            {age}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </ThemeProvider>

    );
}

export const SelectOtherProps = ({ }) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value)
    };
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
                <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-disabled-label"
                    id="demo-simple-select-disabled"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Disabled</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} error>
                <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    renderValue={(value) => `⚠️  - ${value}`}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Error</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-readonly-label"
                    id="demo-simple-select-readonly"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    inputProps={{ readOnly: true }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Read only</FormHelperText>
            </FormControl>
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={age}
                    label="Age *"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>
        </div>
    );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
];

export const MultipleSelectCheckmarks = ({ }) => {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

function getStyles(name: string, personName: string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export const MultipleSelects = ({ }) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export const MultipleSelectChips = ({ }) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export const MultipleSelectPlaceholders = ({ }) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                <Select
                    multiple
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>Placeholder</em>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Placeholder</em>
                    </MenuItem>
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
export const GroupSelect = ({ }) => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);


    const onTargetIdentityChange = event => {
        setPersonName(event.target.value);
    };
    const splitedIdenties = {
        Category1: [{ id: 12, age: "Option 1" }, { id: 13, age: "Option 2" }],
        Category2: [{ id: 14, age: "Option 1" }, { id: 15, age: "Option 2" }],
    };
    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ "width": "300px" }} >
                <FormControl fullWidth>
                    <InputLabel htmlFor="grouped-select" sx={{ "backgroundColor": "#ffffff" }}  >Grouping</InputLabel>
                    <Select id="grouped-select" label="Grouping" value={personName} onChange={onTargetIdentityChange} >
                        {Object.keys(splitedIdenties).map(
                            (identityTypeKey, identityTypeIndex) => {
                                let children = [];

                                children.push(
                                    <MenuItem disabled key={identityTypeIndex} value={identityTypeKey}>
                                        {identityTypeKey}
                                    </MenuItem>
                                );
                                splitedIdenties[identityTypeKey].forEach(identity => {
                                    children.push(
                                        <MenuItem key={identity.id} value={identity.id}>
                                            {identity.age}
                                        </MenuItem>
                                    );
                                });

                                return children;
                            }
                        )}
                    </Select>
                </FormControl>
            </Box>
        </ThemeProvider >
    );
}



import AutocompleteComponent from "../components/autocomplete-component";

export default {
    title: 'Feedback/Autocomplete',
    component: AutocompleteComponent,
    argTypes: {
        
    },
};

const Template = (args) => <AutocompleteComponent {...args}></AutocompleteComponent>;

export const Default = Template.bind({});

Default.args = {
 defaultValue: 14,
  disabled: false,
  disableSwap:false,
  max:100,
  min:10,
  name: 'test',
  orientation: 'horizontal',
  size:'medium',
  step: 5,
  valueLabelDisplay: 'auto',
  marks: true,
  range: false,
  rangeValue:[10,20],
  track:'normal'
}
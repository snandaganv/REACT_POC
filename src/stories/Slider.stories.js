import SliderComponent from "../components/slider-component";

export default {
    title: 'Feedback/Slider',
    component: SliderComponent,
    argTypes: {
      orientation: {
        options: ['horizontal', 'vertical'],
        control: { type: 'radio' },
    },
    },
};

const Template = (args) => <SliderComponent {...args}></SliderComponent>;

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
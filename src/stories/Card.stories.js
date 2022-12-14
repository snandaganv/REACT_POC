import CardComponent from "../components/card-component";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default {
  title: 'Feedback/Card',
  component: CardComponent,
  argTypes: {

    children: [],
    raised: false
  }
};

const Template = (args) => <CardComponent {...args}>{args.children}</CardComponent>;

export const Default = Template.bind({});

Default.args = {
  raised: false,
  headersArray: [{
    id: 0,
    avatar: { label: 'N', bgColor: 'blue' }, title: { label: "Shrimp and Chorizo Paella" },
    subheader: { label: "September" }, action: { iconLabel: 'settings', icon: <MoreVertIcon /> }
  }],
  topoGraphyArray: [{ id: 1, variant: 'h5', text: 'Lizard First' }, { variant: 'h6', text: 'Lizard Second' }, {
    variant: 'body2', text: 'Lizards are a widespread group of squamate reptiles, with over 6,000' +
      'species, ranging across all continents except Antarc'
  }],
  buttonArray: [{ id: 3, size: 'large', label: 'Item Second' }, { size: 'small', label: 'Item Third' }],
  cardMediaArray: [{ id: 4, component: 'img', height: '194', image: 'https://mui.com/static/images/cards/paella.jpg', alt: 'Paella dish' }]
}
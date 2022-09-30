import CardComponent from "../components/card-component";

export default {
    title: 'Feedback/Card',
    component: CardComponent,
    argTypes: {
        
        children: [],
        raised: false
    }
};

const Template = (args) => <CardComponent {...args}></CardComponent>;

export const Default = Template.bind({});

Default.args = {
    raised: false,
    topoGraphyArray:[{variant: 'h5',text:'Lizard First'},{variant: 'h6',text:'Lizard Second'},{variant: 'body2',text:'Lizards are a widespread group of squamate reptiles, with over 6,000'+
    'species, ranging across all continents except Antarc'}],
    buttonArray: [{size: 'large',label:'Item Second'},{size: 'small',label:'Item Third'}],
    headersArray: [{avatar: {label:'Item First',bgColor:'red'},action:{iconLabel:'settings'}}],
    cardMediaArray: [{component: 'img',height:'194',image:'/static/images/cards/paella.jpg',alt:'Paella dish'}]
}
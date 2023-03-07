// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductListComponent } from './product-list.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'AngularBook1/ProductListComponent',
  component: ProductListComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    selectedProduct: {
      name: 'Selected Product',
      type: { name: 'string', required: true },
      control: { type: 'text' },
    },
    products: {
      name: 'Product List',
      type: { name: 'other', value: 'string', required: true },
      defaultValue: [],
      control: { type: 'object' },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [ProductDetailComponent],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ProductListComponent> = (args: ProductListComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  selectedProduct: '',
  products: [],
};

export const WithProducts = Template.bind({});
WithProducts.args = {
  selectedProduct: '',
  products: ['Webcam', 'Microphone', 'Wireless keyboard'],
};

export const ProductSelected = Template.bind({});
ProductSelected.args = {
  selectedProduct: 'Microphone',
  products: ['Webcam', 'Microphone', 'Wireless keyboard'],
};

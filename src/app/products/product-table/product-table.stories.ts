import { moduleMetadata, Story } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductTableComponent } from './product-table.component';
import { of } from 'rxjs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Data Display/ProductTable',
  component: ProductTableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
};

const Template: Story<any> = (args: any) => ({
  component: ProductTableComponent,
  props: {
    ...args
  },
  componentCreated: (component: ProductTableComponent) => {
    component.ngAfterViewInit();
  },
});

const sampleProducts = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
  { id: 4, name: 'Product 4', price: 40 },
  { id: 5, name: 'Product 5', price: 50 },
  { id: 6, name: 'Product 6', price: 60 },
];

export const Default = Object.assign(Template.bind({}), {
  args: {
    products$: of(sampleProducts)
  },
});

export const DoInit = Template.bind({});
DoInit.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
DoInit.args = {
  sort_active: true,
  paginator_active: true,
  products$: of(sampleProducts),


}


export const DoSomething = Object.assign(Template.bind({}), {
  args: {
    products$: of(sampleProducts),
    columnNames: "['name', 'priced', 'noaction']"
  },
});

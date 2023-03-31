import { priceRangeValidator } from './price-range.directive';

describe('PriceRangeDirective', () => {
  it('should create an instance', () => {
    const directive = priceRangeValidator();
    expect(directive).toBeTruthy();
  });
});

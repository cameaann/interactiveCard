import { formatCardNumber } from './components/formatCardNumber';

describe('Number is in proper format 0000 0000 0000 0000', ()=>{
  test(('format cardNumber'), () => {
          expect(formatCardNumber('0000000000000000')).toBe('0000 0000 0000 0000')});
      
});

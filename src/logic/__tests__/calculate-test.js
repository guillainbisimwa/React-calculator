import calculate from '../calculate';

describe('all calculator buttons works correctly', () => {
  it('click of any button should display the correct number', () => {
    const data = { total: '0', operation: null, next: null };
    expect(calculate(data, '5').total).toBe('5');
    expect(calculate(data, '5').total).not.toBe('6');
    expect(calculate(data, '2').operation).toBe(null);
    expect(calculate(data, '3').operation).not.toBe('X');
    expect(calculate(data, '7').next).toBe(null);
    expect(calculate(data, '6').next).not.toBe('3');
  });

  it('AC resets calculator state', () => {
    const data = { total: '3', operation: '+', next: '3' };
    expect(calculate(data, 'AC')).toEqual({ total: '0', next: null, operation: null });
    expect(calculate(data, 'AC')).not.toEqual({ total: 0, next: null, operation: null });
  });
});

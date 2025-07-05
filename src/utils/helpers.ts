export default function convertCurrency(amt:number): string {
  return amt.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
}

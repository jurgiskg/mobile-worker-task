import { MinutesToHours } from './minutes-to-hours.pipe';

describe('HoursPipe', () => {
  it('create an instance', () => {
    const pipe = new MinutesToHours();
    expect(pipe).toBeTruthy();
  });
});

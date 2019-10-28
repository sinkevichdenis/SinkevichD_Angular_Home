/* tslint:disable:no-unused-variable */
import { ReversePipe } from './reverse.pipe';

describe('Pipe: ReversePipe', () => {
  it('should reverse the inputs', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform("123")).toBe("321");
    expect(pipe.transform(" test")).toBe("tset ");
    expect(pipe.transform("test !test .test")).toBe("tset. tset! tset");
    expect(pipe.transform(" ")).not.toBe("");
  });
});

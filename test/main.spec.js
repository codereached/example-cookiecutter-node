import {expect} from 'chai';
import { Example  } from '../src/main.js';

describe('src/main.js', _ => {
  it('it should return "tests"', () => {
    let example = new Example()
    expect(example.perform("test")).to.equal("test");
  })
})

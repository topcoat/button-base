import test from 'ava';
import resin from 'resin';
import fs from 'fs';

test('compilation', t => {
  const input = './button-base.fixture.css';
  const expected = fs.readFileSync('./button-base.expected.css','utf-8').trim();
  return resin({
    src: input,
    vars: true,
    extend: true,
    prepend: '../src/button-base.css'
  }).then(result => {
    t.is(result.css.trim(), expected);
  });
});

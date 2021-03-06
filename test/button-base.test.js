import test from 'ava';
import resin from 'resin';
import fs from 'fs';


test('compilation', t => {
  const input = './button-base.fixture.css';
  const expected = fs.readFileSync('./button-base.expected.css','utf-8').trim();
  return resin({
    src: input,
    css: fs.readFileSync(input, 'utf-8'),
    vars: true,
    extend: true,
    prepend: '..'
  }).then(result => {
    t.is(result.css.trim(), expected);
  });
});

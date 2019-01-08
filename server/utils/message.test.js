var expect = require('expect');

var { generateMessage } = require('./message');
describe('generateMessage', () => {
  it('it should generate the correct message object', () => {
    var from = 'Jaco';
    var text = 'This is a test message';
    var message = generateMessage(from, text);

    //Assertions
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({ from, text });

  });

});
class JwklongExtension {
  getInfo() {
    return {
      id: 'entornixextension', // change this if you make an actual extension!
      name: 'Exponential Idle',
      blocks: [
        {
          opcode: 'strictEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] > (your) < [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        },{
          opcode: 'lowerString',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Lower [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'String'
            }
          }
        },{
          opcode: 'superString',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Super [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'String'
            }
          }
        },{
          opcode: 'powerOperator',
          text: '[ONE] ^ [TWO]',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 3
            }
          }
        },{
          opcode: 'testVar',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Testing Variable'
        }
      ]
    };
  }
  strictEqual(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO;
  }
  lowerString(args) {
    return args.STRING.toLowerCase()
  }
  upperString(args) {
    return args.STRING.toUpperCase()
  }
  powerOperator(args) {
    return Math.pow(args.ONE, args.TWO)
  }
  testVar() {
    return "the testing moment";
  }
}
Scratch.extensions.register(new Entornix333Extension());

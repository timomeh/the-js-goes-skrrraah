require('../src')

it('throws skrrraah error', () => {
  expect(() => {
    try {
      let foo
      foo.bar = 'baz'
    } catch (error) {
      window.onerror(null, null, null, null, error)
    }
  }).toThrowError(new Error('The Ting goes skrrraah!'))
})

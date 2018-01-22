require('../src')

it('throws skrrraah error', () => {
  const spy = jest.spyOn(window, 'onerror')
  let err

  try {
    let foo
    foo.bar = 'baz'
  } catch (error) {
    err = window.onerror(null, null, null, null, error)
  }

  expect(spy).toHaveBeenCalled()
  expect(err).toEqual(new TypeError('The Ting goes skrrraah!'))
})

const createHandler = (component, key) => ({target}) => {
  const value = target.type === 'checkbox' ? target.checked : target.value
  component.setState({ [key]: value })
}

export const linkState = (component, key) => {
  const cache = component.__linkStateHandlers || (component.__linkStateHandlers = {})
  return cache[key] || (cache[key] = createHandler(component, key))
}

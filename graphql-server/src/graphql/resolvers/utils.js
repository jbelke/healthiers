import flatMap from 'mini-dash/flatMap'

export const ifLoggedIn = resolver => (parent, args, context, ast) => {
  if (context.user && context.user.id) {
    return resolver(parent, args, context, ast)
  }
  return Promise.reject(new Error('Authentication required.'))
}

export const selection = ({ fieldNodes }) => flatMap(
  fieldNodes, node => node.selectionSet.selections
).map(sel => sel.name.value)

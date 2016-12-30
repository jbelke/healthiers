export const limitQuery = (query, n) => Number.isInteger(n) ? query.limit(n) : query
export const offsetQuery = (query, n) => Number.isInteger(n) ? query.skip(n) : query
export const augment = (query, { limit, offset }) => limitQuery(
  offsetQuery(query, offset),
  limit
) 

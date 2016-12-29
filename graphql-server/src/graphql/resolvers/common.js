export const resolveUTCDate = field => parent => {
  if (parent && parent[field] instanceof Date) {
    return parent[field].toUTCString()
  }
  return null
}

export const resolveISODate = field => parent => {
  if (parent && parent[field] instanceof Date) {
    return parent[field].toISOString()
  }
  return null
}

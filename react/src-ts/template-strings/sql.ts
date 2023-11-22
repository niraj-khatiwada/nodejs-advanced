;(function () {
  function sql(query: TemplateStringsArray, ...args: any[]) {
    if (args.length == 0) {
      return query.join('')
    }
    let sanitizedQuery = ''
    for (let i = 0; i < query.length - 1; i++) {
      const queryString = query[i]
      const arg = args[i]
      sanitizedQuery += queryString + JSON.stringify(arg ?? '')
    }
    return sanitizedQuery
  }

  const id = 100
  const name = 'niraj; DROP TABLE user;'

  console.log(sql`SELECT * FROM user WHERE id = ${id} AND name = ${name}`)
})()

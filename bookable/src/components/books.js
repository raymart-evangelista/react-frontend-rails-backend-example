function Books({books}) {
  return (
    <div>
      <h1>These books are from the API</h1>
      {books.map((books) => {
        return (
        <div key={books.id}>
          <h2>{books.title}</h2>
          <p>{books.body}</p>
        </div>
        )
      })}
    </div>
  )
}

export default Books
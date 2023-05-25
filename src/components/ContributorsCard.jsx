function Contributors({ contributors }) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 justify-items-center items-center ">
      {contributors?.map((contributor) => (
        <div className="min-w-max p-2" key={contributor.id}>
          <a href={contributor.html_url} target="_blank">
            <img className="h-16 mb-3 rounded-full " src={contributor.avatar_url} alt={contributor.login} />
          </a>
        </div>
      ))}
    </section>
  )
}

export default Contributors

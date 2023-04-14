export const paginate = (followers) => {
  const itemsPerPage = 10
  const pages = Math.ceil(followers.length / itemsPerPage)

  const newFollowers = Array.from({ length: pages }, (item, index) => {
    let start = itemsPerPage * index
    return followers.slice(start, start + itemsPerPage)
  })

  return newFollowers
}

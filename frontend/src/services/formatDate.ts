function formatDate(date: string) {
  const formatedDate = new Date(date).toLocaleDateString("pt-br");
  return formatedDate
}

export default formatDate
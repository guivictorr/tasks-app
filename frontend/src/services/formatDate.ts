function formatDate(date: string) {
  let dateArr = date.split('T')[0].split('-', 3)

  let year = dateArr[0]
  let month = dateArr[1]
  let day = dateArr[2]

  let formatedDate = `${day}/${month}/${year}`
  
  return formatedDate
}

export default formatDate
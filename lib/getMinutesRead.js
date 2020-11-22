export const getMinutesToRead = (data) => {
  const words = data.split(' ')
  const totalMinutes = words.length / 200

  const seconds = totalMinutes.toString().split('.')[1] * 0.6

  if (totalMinutes.toString().split('.')[0]) return Math.ceil(totalMinutes)

  if (seconds > 30) {
    return Math.floor(totalMinutes)
  } else {
    return Math.ceil(totalMinutes)
  }
}

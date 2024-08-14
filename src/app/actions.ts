export async function getPrimeMedian(data: FormData) {
  const numberInput = data.get('numberInput')

  if (!numberInput) {
    return
  }

  const result = await fetch(
    `http://localhost:3333/median-primes/${numberInput}`,
  )

  const json = await result.json()

  console.log(json)

  return json
}

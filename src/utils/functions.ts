/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable consistent-return */
import stays from './stays.json'
import statements from './statements.json'

// call api with adding to store
export const apiCallGet = async (link: string): Promise<unknown> => {
  // если конец файла json то вернуть импортированный джсон а если нет то фетч
  const response = await fetch(link, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  console.log(response)
  const res = await response.json()
  console.log(res)
  return res
}

export const bookingStatus = (status: string, start: Date): string => {
  if (status === 'cancelled') {
    return status
  }
  if (status === 'active' && start > new Date()) {
    return stays.upcome
  }
  return ''
}

// @ts-ignore
export const sortingMonthCosts = (homes): any[] => {
  return (
    homes
      ?.slice()
      // @ts-ignore
      ?.sort((a, b) => b.value - a.value)
      // @ts-ignore
      ?.map((el) => ({ x: el.name, y: el.value, share: el.share }))
  )
}

// @ts-ignore
export const sortingCosts = (homes): any[] => {
  if (homes) {
    return (
      // @ts-ignore
      homes?.slice().sort((a, b) => b.value - a.value)
    )
  }
  return []
}

// @ts-ignore
export const sortingMonthCostsNames = (homes, houses): any[] => {
  return (
    homes
      ?.slice()
      // @ts-ignore
      ?.sort((a, b) => b.value - a.value)
      // @ts-ignore
      ?.map((el) => ({
        // @ts-ignore
        name: `${houses?.currency?.symbol} ${el.value}: ${el.name}`,
      }))
  )
}

export const sortMonthYear = (array: any[]) => {
  return array?.sort(function (a, b) {
    const monthOrder = statements.months
    // @ts-ignore
    return b.year - a.year || monthOrder[b.month] - monthOrder[a.month]
  })
}

export const sortYear = (array: any[]) => {
  return array
    ?.sort(function (a, b) {
      // @ts-ignore
      return b.year - a.year
    })
    .filter((v, i, a) => a.findIndex((t) => t.year === v.year) === i)
}

export const sortMonthYearReverse = (array: any[]) => {
  return array?.slice()?.sort(function (a, b) {
    const monthOrder = statements.months
    // @ts-ignore
    return b.year - a.year || monthOrder[a.month] - monthOrder[b.month]
  })
}

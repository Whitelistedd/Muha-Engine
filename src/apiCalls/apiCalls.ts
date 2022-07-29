import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'

export const getSearchResults = async ({
  pageParam = 1,
  queryKey,
}: QueryFunctionContext) => {
  const searchTerm = queryKey[1]
  if (searchTerm) {
    const data = await axios.get(
      `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CX_KEY}&q=${searchTerm}&start=${pageParam}`
    )
    return data.data
  }
}

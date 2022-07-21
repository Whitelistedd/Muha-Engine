import axios from 'axios'

export const getSearchResults = async (term: string) => {
  if (term) {
    const data = await axios.get(
      `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CX_KEY}&q=${term}`
    )

    return data.data
  }
}

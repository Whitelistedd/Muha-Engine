import { RefObject } from 'react'

export interface ResultDescriptionProps {
  site: string
  ref?: RefObject<HTMLDivElement>
  title: string
  description: string
}

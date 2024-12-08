type DetailError = {
  property: string
  value: string
  messages: string[]
}

export type ErrorResponse = {
  errorType: string
  message: string
  details: DetailError[]
}

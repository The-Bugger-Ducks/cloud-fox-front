function validateStatus(status: number) {
  return (status >= 200 && status < 300) || status === 302 || status === 404
}

export { validateStatus }

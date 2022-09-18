export interface User {
  id: string
  username: string
  email: string
  role: 'simple' | 'advanced' | 'admin'
}

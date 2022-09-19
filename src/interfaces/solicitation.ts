import { User } from './user'

export interface Solicitation {
  id: string
  user: string
  roleReq: 'simple' | 'advanced' | 'admin'
}

export interface SolicitationUser {
  id: string
  user: User
  roleReq: 'simple' | 'advanced' | 'admin'
}

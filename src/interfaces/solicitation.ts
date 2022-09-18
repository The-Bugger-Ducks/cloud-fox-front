export interface Solicitation {
  id: string;
  user: string;
  roleReq: 'simple' | 'advanced' | 'admin';
}

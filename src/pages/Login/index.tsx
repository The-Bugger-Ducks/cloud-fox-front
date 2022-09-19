import LoginModal from '../../components/LoginModal'
import Sidebar from '../../components/Sidebar'

import { Container } from './styles'

export default function Login () {
  return (
    <>
      <Sidebar />
      <Container>
        <LoginModal />
      </Container>
    </>
  )
}

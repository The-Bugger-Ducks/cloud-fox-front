import { useEffect } from 'react'

import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'

import Button from '../Button'
import {
  AiOutlineGooglePlus,
  AiFillFacebook,
  AiFillApple
} from 'react-icons/ai'
import { Container, Title, Buttons } from './styles'

import theme from '../../global/theme'
import UserRequests from '../../utils/Requests/user.request'

export default function LoginModal () {
  const CLIENT_ID =
    '826612899243-r80v2i58suusduq8p3iht9sbaip815db.apps.googleusercontent.com'

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: ''
      })
    }
    gapi.load('client:auth2', initClient)
  })

  const onSuccess = (res: any) => {
    UserRequests.createUser(
      res.profileObj.givenName,
      res.profileObj.email,
      res.profileObj.imageUrl
    ).then(user => {
      localStorage.setItem('userId', user?.id ?? '')
    }).catch(error => console.log(error))
  }

  const onFailure = (err: any) => {
    console.log('failed:', err)

    alert(
      'Que pena! Algo deu errado com seu login. Tente novamente mais tarde!'
    )
  }

  return (
    <Container>
      <Title>Login</Title>

      <Buttons>
        <Button
          title="Login com Facebook"
          fontColor={theme.colors.white}
          backgroundColor={'#1877F2'}
          marginBottom={'1rem'}
          icon={<AiFillFacebook size={24} />}
        />
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login com  Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          render={renderProps => (
            <Button
              title="Login com Google"
              fontColor={theme.colors.gray}
              backgroundColor={theme.colors.white}
              marginBottom={'1rem'}
              onClick={renderProps.onClick}
              icon={<AiOutlineGooglePlus size={24} />}
            />
          )}
        />
        <Button
          title="Login com Apple"
          fontColor={theme.colors.white}
          backgroundColor={theme.colors.black}
          icon={<AiFillApple size={24} />}
        />
      </Buttons>
    </Container>
  )
}

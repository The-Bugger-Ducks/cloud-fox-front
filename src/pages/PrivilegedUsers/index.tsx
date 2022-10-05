import React, { useEffect, useState } from 'react'

import Button from '../../components/Button'
import theme from '../../global/theme'

import { DividerIcon } from '../../assets/icons'

import userRequest from '../../utils/Requests/user.request'
import SolicitationRequests from '../../utils/Requests/solicitation.request'

import { User } from '../../interfaces/user'
import { SolicitationUser } from '../../interfaces/solicitation'

import {
  ActionButtonContainer,
  Divider,
  Main,
  PageTitle,
  Select,
  Table,
  TableData,
  TableHead,
  Title
} from './styles'

export default function PrivilegedUsers () {
  const [userContentPage, setUserContentPage] = useState<boolean>(true)
  const [solicitaionContentPage, setSolicitaionContentPage] = useState<boolean>(false)

  const [solicitationUsers, setSolicitationUsers] = useState<SolicitationUser[]>([])
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getPrivilegedUsers()
    getSolicitationUsers()
  }, [])

  const getPrivilegedUsers = async () => {
    try {
      const response = await userRequest.getUsers()

      if (response === null) throw new Error('Solicitation not found')

      setUsers(response ?? [])
    } catch (error) {
      alert('Error')
    }
  }

  const getSolicitationUsers = async () => {
    try {
      const response = await SolicitationRequests.getSolicitations()

      if (response === null) throw new Error('Solicitation not found')

      setSolicitationUsers(response ?? [])
    } catch (error) {
      alert('Error')
    }
  }

  const headerUserContentPage = [
    {
      title: 'Nome'
    },
    {
      title: 'Email'
    },
    {
      title: 'Privilégio atual'
    },
    {
      title: 'Atualizar privilégio'
    }
  ]

  const headerSolicitaionContentPage = [
    {
      title: 'Nome'
    },
    {
      title: 'Email'
    },
    {
      title: 'Privilégio desejado'
    },
    {
      title: 'Ações'
    }
  ]

  const roleSelectList = [
    {
      role: 'admin',
      label: 'Administrativo'
    },
    {
      role: 'advanced',
      label: 'Avançado'
    },
    {
      role: 'simple',
      label: 'Simples'
    }
  ]

  const PrivilegeLabelElement = ({ role }: { role: User['role'] }) => {
    const findRole = roleSelectList.find(option => option.role === role)

    return (
      <TableData>
        {findRole?.label}
      </TableData>
    )
  }

  const SelectUserRole = ({ user }: { user: User }) => {
    return (
      <TableData>
        <Select id="update-role-user" onChange={(event) => onUserRoleChange(event, user)} defaultValue={user.role}>
          {roleSelectList.map(({ role, label }, index) => (
            <option key={index} value={role}>{label}</option>
          ))}
        </Select>
      </TableData>
    )
  }

  const ActionsUserRole = ({ solicitation }: { solicitation: SolicitationUser }) => {
    return (
      <TableData>
        <ActionButtonContainer>
          <Button title="Aprovar" onClick={() => handleUserRoleChanged(solicitation, true)}/>
          <Button title="Recusar" backgroundColor={theme.colors.gray} onClick={() => handleUserRoleChanged(solicitation, false)}/>
        </ActionButtonContainer>
      </TableData>
    )
  }

  const onUserRoleChange = (event: React.ChangeEvent<HTMLSelectElement>, user: User) => {
    // const value = event.target.value as User['role']

    alert('Recurso indisponível no momento')
  }

  const handleUserRoleChanged = (solicitation: SolicitationUser, accept: boolean) => {
    try {
      if (accept) {
        SolicitationRequests.validateSolicitation(solicitation.id, solicitation.user.id, solicitation.roleReq)
      } else {
        SolicitationRequests.validateSolicitation(solicitation.id, solicitation.user.id)
      }

      const solicitationFiltered = solicitationUsers.filter(solicitationUser => solicitationUser.id !== solicitation.id)

      setSolicitationUsers(solicitationFiltered)
    } catch (error) {
      console.log(error)
    }
  }

  const onChangePage = (selected: boolean) => {
    if (selected) return

    setUserContentPage(!userContentPage)
    setSolicitaionContentPage(!solicitaionContentPage)
  }

  return (
    <>
      <Main>
        <PageTitle>
          <Title
            pageActive={userContentPage}
            onClick={() => onChangePage(userContentPage)}
          >
            USUÁRIOS PRIVILEGIADOS
          </Title>
          <Divider src={DividerIcon} alt="Divisor" />
          <Title
            pageActive={solicitaionContentPage}
            onClick={() => onChangePage(solicitaionContentPage)}
          >
            SOLICITAÇÕES
          </Title>
        </PageTitle>

        <Table>
          <thead>
            <tr>
              {userContentPage &&
                headerUserContentPage.map((item, index) => (
                  <TableHead key={index}>{item.title}</TableHead>
                ))
              }
              {solicitaionContentPage &&
                headerSolicitaionContentPage.map((item, index) => (
                  <TableHead key={index}>{item.title}</TableHead>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {userContentPage &&
              users.map(user => (
              <tr key={user.id}>
                <TableData>{user.username}</TableData>
                <TableData>{user.email}</TableData>
                <PrivilegeLabelElement role={user.role} />
                <SelectUserRole user={user} />
              </tr>
              ))}
            {solicitaionContentPage &&
              solicitationUsers.map(solicitation => (
              <tr key={solicitation.id}>
                <TableData>{solicitation.user.username}</TableData>
                <TableData>{solicitation.user.email}</TableData>
                <PrivilegeLabelElement role={solicitation.roleReq} />
                <ActionsUserRole solicitation={solicitation} />
              </tr>
              ))}
          </tbody>
        </Table>
      </Main>
    </>
  )
}

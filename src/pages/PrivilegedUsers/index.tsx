import React, { useState } from "react";

import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";
import theme from "../../global/theme";

import { DividerIcon } from "../../assets/icons";

import { 
  ActionButtonContainer,
  Divider,
  Main,
  PageTitle,
  Select,
  Table,
  TableData,
  TableHead,
  Title,
} from './styles';

import { User } from "../../interfaces/user.interface";

export default function PrivilegedUsers() {

  const [userContentPage, setUserContentPage] = useState<boolean>(true)
  const [solicitaionContentPage, setSolicitaionContentPage] = useState<boolean>(false)

  const headerUserContentPage = [
    {
      title: "Nome",
    },
    {
      title: "Email",
    },
    {
      title: "Privilégio atual",
    },
    {
      title: "Atualizar privilégio",
    }
  ]

  const headerSolicitaionContentPage = [
    {
      title: "Nome",
    },
    {
      title: "Email",
    },
    {
      title: "Privilégio desejado",
    },
    {
      title: "Ações",
    }
  ]

  const users: User[] = [
    {
      id: "213213",
      username: "Laura Caixão",
      email: "laura.caixao@gmail.com",
      role: "simple",      
    },
    {
      id: "215243523",
      username: "Nancy Souza",
      email: "nancy.souza@gmail.com",
      role: "admin",      
    },
  ]

  const roleSelectList = [
    {
      role: "admin",
      label: "Administrativo",
    },
    {
      role: "advanced",
      label: "Avançado",
    },
    {
      role: "simple",
      label: "Simples",
    },
  ]

  const PrivilegeLabelElement = ({ role } : { role: User["role"] }) => {
    const findRole = roleSelectList.find(option => option.role === role)

    return (
      <TableData>
        {findRole?.label}
      </TableData>  
    )
  }

  const SelectUserRole = ({ userRole } : { userRole: User["role"] }) => {
    return (
      <TableData>
        <Select id="update-role-user" onChange={onUserRoleChange} defaultValue={userRole}>
          {roleSelectList.map(({ role, label }, index) => (
            <option key={index} value={role}>{label}</option>
          ))}
        </Select>
      </TableData>
    )
  }

  const ActionsUserRole = ({ user } : { user: User }) => {
    return (
      <TableData>
        <ActionButtonContainer>
          <Button title="Aprovar" onClick={() => {}}/>
          <Button title="Recusar" backgroundColor={theme.colors.gray} onClick={() => {}}/>
        </ActionButtonContainer>
      </TableData>
    )
  }

  const onUserRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);    
  }

  const onChangePage = (selected: boolean) => {   
    if (selected) return;

    setUserContentPage(!userContentPage)
    setSolicitaionContentPage(!solicitaionContentPage)
  }



  return (
    <>
      <Sidebar />
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
            SOLICITAÇÕES PRIVILEGIADOS
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
            {users.map(user => (
              <tr key={user.id}>
                <TableData>{user.username}</TableData>
                <TableData>{user.email}</TableData>
                <PrivilegeLabelElement role={user.role} />
                {userContentPage ? 
                  <SelectUserRole userRole={user.role} /> : 
                  <ActionsUserRole user={user} />
                }
              </tr>
            ))}        
          </tbody>
        </Table>
      </Main>
    </>
  );
}
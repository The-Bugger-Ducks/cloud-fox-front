import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";
import theme from "../../global/theme";

import { 
  Container,
  Main,
  Table,
  TableData,
  TableHead,
  Title
} from './styles';

export default function PrivilegedUsers() {
  const header = [
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

  const users = [
    {
      name: "Laura Caixão",
      email: "laura.caixao@gmail.com",
      role: "Avançado",      
    },
    {
      name: "Nancy Souza",
      email: "nancy.souza@gmail.com",
      role: "Administrativo",      
    },
  ]


  return (
    <Container>
      <Sidebar />
      <Main>
        <Title>USUÁRIOS PRIVILEGIADOS</Title>

        <Table>
          <thead>
            <tr>
              {header.map(item => (
                <TableHead>{item.title}</TableHead>
              ))}                
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr>
                <TableData>{user.name}</TableData>
                <TableData>{user.email}</TableData>
                <TableData>{user.role}</TableData>                  
                <TableData>
                  <Button
                    title="Selecionar Nível"
                    fontColor={theme.colors.white}
                    />
                  ✍
                </TableData>
              </tr>
            ))}        
          </tbody>
        </Table>
      </Main>
    </Container>
  );
}
import { User } from '../../interfaces/user';
import { api } from '../../services/api';

class UserRequests {
  public async getUsers() {
    try {
      const response = await api.get(`users/`);
      return response.data as User[];
    } catch (error) {
      console.log(error);
      alert('Não foi possível obter os dados dos usuários.');
    }
  }

  public async getUser(id: string) {
    try {
      const response = await api.get(`users/${id}`);
      return response.data as User;
    } catch (error) {
      console.log(error);
      alert('Não foi possível obter os dados do usuário.');
    }
  }

  public async createUser(username: string, email: string, imgSrc: string) {
    try {
      const response = await api.post(`users/`, {
        username,
        email,
        role: 'simple',
        imgSrc,
      });
      return response.data as User;
    } catch (error) {
      console.log(error);
      alert('Não foi possível criar o usuário.');
    }
  }

  public async deleteUser(id: string) {
    try {
      await api.delete(`users/${id}`);
      alert('Conta deletada com sucesso!');
    } catch (error) {
      console.log(error);
      alert('Não foi possível deletar a conta.');
    }
  }
}

export default new UserRequests();

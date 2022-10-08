import api from '../../config/api'
import * as UserService from '../../services/Users'

const path= 'easy-coffee/v1/customer/'

const getByCpf = (cpf: string) => api.get<string>(`${path}get-by-cpf/${cpf}`)
  .then((response) => response.data)
export {
  getByCpf
}
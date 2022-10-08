import React from 'react'
import Button from '../../components/atoms/Button'
import Input from '../../components/atoms/Input'
import Container from '../../components/atoms/Container'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'
import * as UserService from '../../services/Users'

const Home = () => {

  const handleSubmit = (cpf: string) => {
    UserService.getByCpf(cpf)
    .then((response) => {
      console.log(response)
    }
  }
  return (
    <Container 
      fullHeight 
      fullCentered>
      <Paper>
  
        <Typography as="h1">Bem Vindo!</Typography>
        <Input
          type='text'
        />
        <br/>
        <Button
          onClick={() => handleSubmit('04335816020')}>
        Entrar
        </Button>
    
      </Paper>
    </Container>
  )}

  

export default Home
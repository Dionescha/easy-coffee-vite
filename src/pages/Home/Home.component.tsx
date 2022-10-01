import React from 'react'
import Button from '../../components/atoms/Button'
import Input from '../../components/atoms/Input'
import Container from '../../components/atoms/Container'
import Paper from '../../components/atoms/Paper'
import Typography from '../../components/atoms/Typography'


const Home = () => (

  <Container 
    fullHeight 
    fullCentered>
    <Paper>
  
      <Typography as="h1">Bem Vindo!</Typography>
      <Input
        type='text'
      />
      <br/>
      <Button>
        Entrar
      </Button>
    
    </Paper>
  </Container>
    
  
    
    
  
)

export default Home
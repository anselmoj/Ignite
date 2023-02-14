import { styled } from '@/styles'

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 4,
})

export default function Home() {
  return <Button>Enviar</Button>
}

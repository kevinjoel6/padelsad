import React from 'react'
import { Card ,Row,Text,Button} from '@nextui-org/react'
const Sponsors = ({marca,descripcion}) => {
  return (
<Card>
        <Card.Header>
            <Text>marca:{marca}</Text>

        </Card.Header>
        <Card.Body>
            <Text>
                {descripcion}
            </Text>

        </Card.Body>
        <Card.Footer>
        <Row justify="flex-end">
              <Button size="sm" light>
                ver mas dettales
              </Button>
              <Button size="sm">me gusta!!</Button>
            </Row>
        </Card.Footer>
      
      
    </Card>
  )
}

export default Sponsors

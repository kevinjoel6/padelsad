import { Card ,Text,Button} from '@nextui-org/react'
import React from 'react'

const Awards = ({nombre,ganador,premio}) => {
  return (
    <Card>
        <Card.Header>
            nombre:{nombre}

        </Card.Header>
        <Card.Body>
            <Text>el premio era:{premio}</Text>
            <Text>ganador del trofeo:{ganador}</Text>

        </Card.Body>
        <Card.Footer>
       
              <Button size="sm">me gusta!!</Button>
            

        </Card.Footer>
      
    </Card>
  )
}

export default Awards

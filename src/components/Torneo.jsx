
import React from 'react'
import { Card, Grid, Text , Button, Row } from "@nextui-org/react";

export const Torneo = ({nombre,ganador,fecha,participantes}) => {

    

  return (
    <Card  isHoverable >
             <Card.Header>
            <Text >campeonato:{nombre}</Text>
          </Card.Header>
        <Card.Body>
            <Text>fecha:{fecha}</Text>
            <Text>nombre de participantes:{participantes}</Text>
            <Text>ganador{ganador}</Text>
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

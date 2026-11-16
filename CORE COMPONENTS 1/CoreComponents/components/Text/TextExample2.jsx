import React from 'react'

//? It is recommended to render Text with Text Component and not Without View Component.
//? Always use View Component to render Text Component. 
//  ERROR  [ReferenceError: Property 'View' doesn't exist]
export default function TextExample2() {
  return (
    <Text>This is Text Component Example 2</Text>
  )
}

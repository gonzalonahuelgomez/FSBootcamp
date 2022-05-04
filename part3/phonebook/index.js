const express = require('express')
const app = express()

app.use(express.json())
let persons =
[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons',(request,response) => {
    response.json(persons)
})

app.get('/api/persons/:id',(request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if(person)
        response.json(person)
    else
        response.status(404).end
})

app.get('/api/info',(request,response) => {
    const manyEntries = persons.length
    const date = new Date()
    response.send(`Phonebook has info for ${manyEntries} people<br/>${date}`)
})

const generateId = () => {
  const min = Math.max(...persons.map(person => person.id))
  const id = persons.length > 0 ? Math.floor(Math.random() * (999 - min) + min) : 0
  return id
}

app.post('/api/persons', (request, response) => {
  const body = request.body
  if(!body.name)
    response.status(404)
  
  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)

  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT)
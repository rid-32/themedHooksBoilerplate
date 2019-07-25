import { build, fake } from 'test-data-bot'

const userBuilder = build('User').fields({
  email: fake(f => f.internet.email()),
  password: fake(f => f.internet.password()),
})

const nameBuilder = build('Name').fields({
  data: fake(f => f.internet.userName()),
})

const wordBuilder = build('Word').fields({
  data: fake(f => f.random.word()),
})

const invalidPasswordBuilder = build('InvalidPassword').fields({
  data: fake(f => f.internet.mac()),
})

const lineBuilder = build('Line').fields({
  name: fake(f => f.lorem.word().substring(0, 10)),
})

const codeBuilder = build('Code').fields({
  data: fake(f => f.random.number()),
})

export {
  userBuilder,
  lineBuilder,
  codeBuilder,
  wordBuilder,
  invalidPasswordBuilder,
  nameBuilder,
}

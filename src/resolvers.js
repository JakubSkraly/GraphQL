import persons from '../database/data.js';
import { Person } from '../models/Person.js';

const resolvers = {
    Query: {
        personCount: () => {
            return persons.length
        },
        allPersons: async () => {
            const persons = await Person.find()
            return persons
        },
        findPerson: async (parent, args, context, info) => {
            const { name } = args
            const person = await Person.findOne({ name })
            return person
        },
        findPersonById: async (parent, args, context, info) => {
            const { id } = args
            const person = await Person.findById(id)
            return person
        },
    },
    Mutation: {
        addPerson: async (parent, args, context, info) => {
            const { name, phone, street, city } = args
            const newPerson = new Person({ name, phone, street, city })
            await newPerson.save()
            return newPerson
        },
        deletePerson: async (parent, args, context, info) => {
            const { id } = args
            const person = await Person.findByIdAndDelete(id)
            return person
        },
        updatePerson: async (parent, args, context, info) => {
            const { id, name, phone, street, city } = args
            const updatePerson = await Person.findByIdAndUpdate(id, { name, phone, street, city }, { new: true })
            return updatePerson
        },
    },
};

export { resolvers };
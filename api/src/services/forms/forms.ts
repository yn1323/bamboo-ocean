import type {
  FormRelationResolvers,
  MutationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const forms: QueryResolvers['forms'] = () => {
  return db.form.findMany()
}

export const form: QueryResolvers['form'] = ({ id }) => {
  return db.form.findUnique({
    where: { id },
  })
}

export const createForm: MutationResolvers['createForm'] = ({ input }) => {
  return db.form.create({
    data: input,
  })
}

export const updateForm: MutationResolvers['updateForm'] = ({ id, input }) => {
  return db.form.update({
    data: input,
    where: { id },
  })
}

export const deleteForm: MutationResolvers['deleteForm'] = ({ id }) => {
  return db.form.delete({
    where: { id },
  })
}

export const Form: FormRelationResolvers = {
  battleData: (_obj, { root }) => {
    return db.form.findUnique({ where: { id: root?.id } }).battleData()
  },
}

import { Request, Response } from 'express'
import { Category } from '../model/Category'

interface ICreateCategoriesDTO {
  name: string
  description: string
}

class CategoryRepositories {
  private categories: Category[]

  constructor(){
    this.categories = []
  }

  create({name, description}: ICreateCategoriesDTO): void{
    const category = new Category()

  Object.assign(category, {
    name,
    description,
    create_at: new Date()
  })
    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find(category => category.name === name)
    return category
    
  }
}


export { CategoryRepositories }
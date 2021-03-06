import { add, getAll, getByName, update, remove } from '../products.mjs'

const main = () => {
  try {
    add('pomme', 4)
    add('pomme', 6)
    add('poire', 8)
    add('fraise', 3)

    console.log('\n# PRODUITS :')
    getAll().forEach((p) => console.log(`- ${p.name} : ${p.quantity}`))

    console.log('\nChange pomme en mangue (6)')
    const u = update('pomme', { name: 'mangue', quantity: 6 })
    if (!u) {
      console.log('erreur update')
      return
    }

    console.log('\n# MANGUES :')
    console.log(getByName('mangue'))
    console.log('')

    remove('mangue', 12)
    remove('mangue', 3)

    console.log('\n# PRODUITS :')
    getAll().forEach((p) => console.log(`- ${p.name} : ${p.quantity}`))
  } catch (e) {
    console.log(e)
  }
}

main()

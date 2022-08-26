import { Menu } from "../database/index.js";
import menu from "../database/data/menuData.js";

const seedMongo = () => {
  return Menu.deleteMany({})
    .then(() => console.log('\x1b[36m', '\nDatabase (MongoDB): \'menu\' table successfully dropped!'))
    .then(() => Menu.insertMany(menu))
    .then(result => console.log('\x1b[32m', `\nDatabase (MongoDB): ${result.length} menu items successfully seeded!`))
    .then(process.exit)
}

seedMongo();
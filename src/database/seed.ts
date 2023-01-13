import { Menu } from "./index.js";
import menu from "./data/menuData.js";
import { Event } from "./index.js";
import events from "./data/eventData.js";

const seedMongo = async () => {
  try {
    await Menu.deleteMany({});
    console.log(
      "\x1b[36m",
      "\nDatabase (MongoDB): 'menu' table successfully dropped!"
    );
    const result = await Menu.insertMany(menu);
    console.log(
      "\x1b[32m",
      `\nDatabase (MongoDB): ${result.length} menu items successfully seeded!`
    );
    await Event.deleteMany({});
    console.log(
      "\x1b[36m",
      "\nDatabase (MongoDB): 'event' table successfully dropped!"
    );
    const result_1 = await Event.insertMany(events);
    const code = console.log(
      "\x1b[32m",
      `\nDatabase (MongoDB): ${result_1.length} events successfully seeded!`
    );
    return process.exit(code);
  } catch (err) {
    return console.log("\x1b[31m", `\nDatabase (MongoDB): ${err}`);
  }
};
seedMongo();

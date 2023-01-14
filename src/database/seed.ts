import { Menu, Event } from "./index";
import menu from "./data/menuData";
import events from "./data/eventData";

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
    return process.exit(code as unknown as number);
  } catch (err) {
    return console.log("\x1b[31m", `\nDatabase (MongoDB): ${err}`);
  }
};
seedMongo();

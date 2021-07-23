import { Client } from "discord.js";
import data from "./data.json";
import { readyEvent } from "./events/onready";
import { start } from "./commands/start";

export let client = new Client();

start();

readyEvent();

client.login(data.token);

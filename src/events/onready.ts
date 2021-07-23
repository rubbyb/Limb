import { client } from "../limb";
import { botInfoFunc } from "../functions/limb_functions";
import "colors";

export const readyEvent = () => {
  client.on("ready", () => {
    console.log(
      `Sucessfully connected to ${botInfoFunc().name} bot!\n`.red.bold,
      `Limb located in ${botInfoFunc().guildSize} guild`.blue.bold
    );
  });
};

import { client } from "../limb";
import { ReactionCollector, MessageEmbed } from "discord.js";
import data from "../data.json";

export function start() {
  client.on("message", (msg) => {
    if (msg.content === `${data.prefix} start`) {
      const embedStart = new MessageEmbed({
        title: "Vamos começar!",
        description:
          "Olá, esta é a página de Configurações, para acessar a proxima página, clique na reação abaixo para ir a próxima página",
        color: "#F47C00",
      });

      msg.channel.send(embedStart).then((reaction) => {
        reaction.react("<:arrowleft:868206468699140126>");
        reaction.react("<:arrowright:868206468317466725>");
      });
    }
  });
}

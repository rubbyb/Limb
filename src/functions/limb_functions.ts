import { client } from "../limb";
import { botInfos } from "../class/class";

export function botInfoFunc() {
  let infoClass = new botInfos(
    client.user?.username,
    client.channels.cache.mapValues.length,
    client.user?.id
  );

  return infoClass;
}

import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";
import { Nobullet } from "../lib/nobullet";

export const [BULLET_LIST, BULLET_LISTS] = ["bulletlist_power-up", "bulletlists_power-up"];

let NoBulletCSS: string;

async function onActivate(plugin: ReactRNPlugin) {
  try {
    await fetch("snippet.css")
      .then((response) => response.text())
      .then((text) => {
        NoBulletCSS = text;
        console.dir("No Bullet Editor Mode Installed");
      })
      .catch((error) => console.error(error));
  } catch (localError) {
    await fetch("https://raw.githubusercontent.com/browneyedsoul/RemNote-NoBulletEditorMode/main/src/snippet.css")
      .then((response) => response.text())
      .then((text) => {
        NoBulletCSS = text;
        console.dir("No Bullet Editor Mode Installed");
      })
      .catch((error) => console.error(error));
  }
  await Nobullet();

  await plugin.app.registerPowerup("Bulletlist", BULLET_LIST, "A Power-up Block for making a bullet", { slots: [] });
  await plugin.app.registerPowerup("Bulletlists", BULLET_LISTS, "A Power-up Block for making bullets", { slots: [] });

  await plugin.app.registerCommand({
    id: "bulletlist",
    name: "Bulletlist",
    description: "Make a bullet",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(BULLET_LIST);
    },
  });
  await plugin.app.registerCommand({
    id: "bulletlists",
    name: "Bulletlists",
    description: "Make bullets",
    action: async () => {
      const rem = await plugin.focus.getFocusedRem();
      await rem?.addPowerup(BULLET_LISTS);
    },
  });
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);

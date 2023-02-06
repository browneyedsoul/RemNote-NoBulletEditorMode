import { declareIndexPlugin, ReactRNPlugin } from "@remnote/plugin-sdk";

export const [BULLET_LIST, BULLET_LISTS] = ["bulletlist", "bulletlists"];

async function onActivate(plugin: ReactRNPlugin) {
  await plugin.app.registerPowerup("bulletlist", BULLET_LIST, "A Power-up Block for making a bullet", { slots: [] });
  await plugin.app.registerPowerup("bulletlists", BULLET_LISTS, "A Power-up Block for making bullets", { slots: [] });

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

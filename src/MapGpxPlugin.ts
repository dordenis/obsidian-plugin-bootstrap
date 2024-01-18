import {FileSystemAdapter, normalizePath, parseYaml, Plugin, TFile} from "obsidian";
import {DEFAULT_SETTINGS, MapGpxSettings} from "./MapGpxSettings";
import {MapGpxTab} from "./MapGpxTab";
import {MapGpx} from "./MapGpx";

export default class MapGpxPlugin extends Plugin {

	settings: MapGpxSettings;

	async onload() {
		console.log("Load GPX plugin")

		await this.loadSettings()

		this.addSettingTab(new MapGpxTab(this.app, this))

		this.registerMarkdownCodeBlockProcessor("map",   async (source, el, ctx) => {
			await this.loadMdSettings(source);

			const map = new MapGpx(el, this.settings);

			const path = normalizePath(this.settings.track);
			const file = this.app.vault.getAbstractFileByPath(path);
			if (file instanceof TFile) {
				const xml = await this.app.vault.read(file);
				map.renderTrack(xml);
			}
		});

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async loadMdSettings(source: string) {
		this.settings = Object.assign({}, this.settings, await parseYaml(source));
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	onunload() {
		super.onunload();
		console.log("Unload GPX plugin")
	}

}


export interface MapGpxSettings {
	track: string
	color: string
	service: string
	height: string
	width: string
	zoomControl: boolean
	startIconUrl: string
	endIconUrl: string
	wptIconUrl: string
	shadowUrl: string
	path: string
}

export const DEFAULT_SETTINGS: Partial<MapGpxSettings> = {
	track: "",
	color: "blue",
	service: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
	height: "600px",
	width: "100%",
	zoomControl: true,
	startIconUrl: "",
	endIconUrl: "",
	wptIconUrl: "",
	shadowUrl: "",
	path: "",
};

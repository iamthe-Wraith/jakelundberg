import { writable } from 'svelte/store';
import type * as THREE from 'three';

export type OutdoorAssetNames =
	| 'brazier-1'
	| 'fence-1'
	| 'fence-2'
	| 'fence-3'
	| 'gate-1-1'
	| 'gate-1-2'
	| 'gate-large-1-1'
	| 'gate-large-1-2'
	| 'mausoleum-1'
	| 'pillar-1'
	| 'pillar-lantern'
	| 'pillar-skull'
	| 'stepstone-1'
	| 'stepstone-2'
	| 'stepstone-3'
	| 'stepstone-4'
	| 'stepstone-5'
	| 'tombstone-1'
	| 'tombstone-2'
	| 'tombstone-3'
	| 'tombstone-4'
	| 'tree-1'
	| 'tree-2'
	| 'tree-3'
	| 'tree-4';

interface IAssetLoad {
	progress: number;
	total: number;
	complete: boolean;
}

interface IAssetPack<T extends string> {
	meshes: Record<T, THREE.Mesh | THREE.Group | null>;
	load: IAssetLoad;
	error: string;
}

interface IAssets {
	outdoor: IAssetPack<OutdoorAssetNames>;
}

const initAssets: IAssets = {
	outdoor: {
		meshes: {
			'brazier-1': null,
			'fence-1': null,
			'fence-2': null,
			'fence-3': null,
			'gate-1-1': null,
			'gate-1-2': null,
			'gate-large-1-1': null,
			'gate-large-1-2': null,
			'mausoleum-1': null,
			'pillar-1': null,
			'pillar-lantern': null,
			'pillar-skull': null,
			'stepstone-1': null,
			'stepstone-2': null,
			'stepstone-3': null,
			'stepstone-4': null,
			'stepstone-5': null,
			'tombstone-1': null,
			'tombstone-2': null,
			'tombstone-3': null,
			'tombstone-4': null,
			'tree-1': null,
			'tree-2': null,
			'tree-3': null,
			'tree-4': null,
		},
		load: {
			progress: 0,
			total: 0,
			complete: false,
		},
		error: '',
	},
};

export function initMesh(mesh: THREE.Mesh) {
	mesh.geometry.computeVertexNormals();
	mesh.castShadow = true;
	mesh.receiveShadow = true;
}

function createAssetsStore() {
	const { subscribe, update } = writable<IAssets>(initAssets);

	return {
		subscribe,
		setAssets: (property: keyof IAssets, objects: THREE.Object3D<THREE.Object3DEventMap>[]) => {
			const assets = { ...initAssets };

			objects.forEach((object) => {
				const g = object as THREE.Group;
				if (g.isGroup) {
					g.children.forEach((groupChild) => {
						initMesh(groupChild as THREE.Mesh);
					});

					assets.outdoor.meshes[g.name as OutdoorAssetNames] = g;
				}

				const m = object as THREE.Mesh;
				if (m.isMesh) {
					initMesh(m);
					assets.outdoor.meshes[m.name as OutdoorAssetNames] = m;
				}
			});

			update((state) => {
				return {
					...state,
					[property]: {
						...state[property],
						meshes: { ...state[property].meshes, ...assets[property].meshes },
					},
				};
			});
		},
		loading: (property: keyof IAssets, progress: number, total: number) => {
			update((state) => {
				return {
					...state,
					[property]: {
						...state[property],
						load: {
							progress: progress,
							total,
							complete: progress === total,
						},
					},
				};
			});
		},
		error: (property: keyof IAssets, error: string) => {
			update((state) => {
				return {
					...state,
					[property]: {
						...state[property],
						error,
					},
				};
			});
		},
	};
}

export const assets = createAssetsStore();

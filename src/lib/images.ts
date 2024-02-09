type ImageLinkArgs = {
	/** Image ID */
	id: ImageKey;
	/** Image Height */
	h: number;
	/** Image Width */
	w: number;
	/** Adds the fit=max query param */
	max?: boolean;
};

export function getImageLink({ id, h, w, max }: ImageLinkArgs): string {
	const path = images[id].raw;
	return `${path}&w=${w}&h=${h}&auto=format&fit=${max ? 'max' : 'crop'}`;
}

type ImageKey = keyof typeof images;

export const images = {
    'github_alysonhower': {
        raw: 'https://avatars.githubusercontent.com/u/102027527?v=4'
    },
    'pilhas_de_documentos': {
        raw: 'https://images.unsplash.com/photo-1583521214690-73421a1829a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }

} as const;
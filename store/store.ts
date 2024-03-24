import { create } from 'zustand'
import { Subscription } from '@/types/Subscription'

export type LanguagesSupported =
	| 'en'
	| 'es'
	| 'de'
	| 'fr'
	| 'ja'
	| 'uk'
	| 'pl'
	| 'no'

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
	en: 'English',
	es: 'Spanish',
	de: 'German',
	fr: 'French',
	ja: 'Japanese',
	uk: 'Ukrainian',
	pl: 'Polish',
	no: 'Norwegian',
}

interface SubscriptionState {
	subscription: Subscription | null | undefined
	setSubscription: (subscription: Subscription | null) => void
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
	subscription: undefined,
	setSubscription: (subscription: Subscription | null) => set({ subscription }),
}))

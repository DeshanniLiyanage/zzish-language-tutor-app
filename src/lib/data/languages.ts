// src/lib/data/languages.js
export const languages = [
	{ value: 'fr', label: 'French', flag: '🇫🇷' },
	{ value: 'en', label: 'English', flag: '🇬🇧' },
	{ value: 'de', label: 'German', flag: '🇩🇪' },
	{ value: 'es', label: 'Spanish', flag: '🇪🇸' },
	{ value: 'it', label: 'Italian', flag: '🇮🇹' },
	{ value: 'ja', label: 'Japanese', flag: '🇯🇵' },
	{ value: 'ta', label: 'Tamil', flag: '🇮🇳' },
	{ value: 'pt', label: 'Portuguese', flag: '🇧🇷' },
	{ value: 'ru', label: 'Russian', flag: '🇷🇺' },
	{ value: 'ar', label: 'Arabic', flag: '🇸🇦' }
];

export function getLabelByValue(input: string) {
	const language = languages.find((lang) => lang.value === input);
	return language ? language.label : null;
}

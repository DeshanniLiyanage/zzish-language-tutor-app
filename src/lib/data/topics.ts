import {
	Airplay,
	CheckCircle,
	Cloud,
	Compass,
	Hash,
	HelpCircle,
	MapPin,
	Palette,
	Shirt,
	ShoppingBag,
	Users
} from 'lucide-svelte';

export const topics = [
	{
		value: null,
		label: 'None',
		bgColor: 'bg-pink-100',
		borderColor: 'border-pink-200',
		hoverBgColor: 'bg-pink-200',
		hoverBorderColor: 'border-pink-300',
		icon: CheckCircle
	},
	{
		value: 'Hobbies',
		label: 'Hobbies',
		bgColor: 'bg-teal-100',
		borderColor: 'border-teal-200',
		hoverBgColor: 'bg-teal-200',
		hoverBorderColor: 'border-teal-300',
		icon: Airplay
	},
	{
		value: 'Travel',
		label: 'Travel',
		bgColor: 'bg-amber-100',
		borderColor: 'border-amber-200',
		hoverBgColor: 'bg-amber-200',
		hoverBorderColor: 'border-amber-300',
		icon: Compass
	},
	{
		value: 'Weather',
		label: 'Weather',
		bgColor: 'bg-orange-100',
		borderColor: 'border-orange-200',
		hoverBgColor: 'bg-orange-200',
		hoverBorderColor: 'border-orange-300',
		icon: Cloud
	},
	{
		value: 'Fashion',
		label: 'Fashion',
		bgColor: 'bg-gray-100',
		borderColor: 'border-gray-200',
		hoverBgColor: 'bg-gray-200',
		hoverBorderColor: 'border-gray-300',
		icon: Shirt
	},
	{
		value: 'Ask help',
		label: 'help',
		bgColor: 'bg-red-100',
		borderColor: 'border-red-200',
		hoverBgColor: 'bg-red-200',
		hoverBorderColor: 'border-red-300',
		icon: HelpCircle
	},
	{
		value: 'Shopping',
		label: 'Shopping',
		bgColor: 'bg-indigo-100',
		borderColor: 'border-indigo-200',
		hoverBgColor: 'bg-indigo-200',
		hoverBorderColor: 'border-indigo-300',
		icon: ShoppingBag
	},
	{
		value: 'Directions',
		label: 'Directions',
		bgColor: 'bg-yellow-100',
		borderColor: 'border-yellow-200',
		hoverBgColor: 'bg-yellow-200',
		hoverBorderColor: 'border-yellow-300',
		icon: MapPin
	},
	{
		value: 'Numbers',
		label: 'Numbers',
		bgColor: 'bg-green-100',
		borderColor: 'border-green-200',
		hoverBgColor: 'bg-green-200',
		hoverBorderColor: 'border-green-300',
		icon: Hash
	},
	{
		value: 'Colors',
		label: 'Colors',
		bgColor: 'bg-blue-100',
		borderColor: 'border-blue-200',
		hoverBgColor: 'bg-blue-200',
		hoverBorderColor: 'border-blue-300',
		icon: Palette
	},
	{
		value: 'Family',
		label: 'Family',
		bgColor: 'bg-pink-100',
		borderColor: 'border-pink-200',
		hoverBgColor: 'bg-pink-200',
		hoverBorderColor: 'border-pink-300',
		icon: Users
	},
	{
		value: 'Words',
		label: 'Words',
		bgColor: 'bg-orange-100',
		borderColor: 'border-orange-200',
		hoverBgColor: 'bg-orange-200',
		hoverBorderColor: 'border-orange-300',
		icon: Hash
	}
];

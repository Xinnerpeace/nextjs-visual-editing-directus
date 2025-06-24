import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Metadata } from 'next';

/**
 * Combines class names dynamically with Tailwind merge.
 *
 * @param inputs - The class names to combine
 * @returns A single string with combined class names
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Native debounce utility
export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
	let timeout: ReturnType<typeof setTimeout> | null;

	return (...args: Parameters<T>) => {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
}

// 添加UUID生成函数
export function generateUUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		const r = Math.random() * 16 | 0;
		const v = c === 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

// 为了兼容性,添加polyfill
if (typeof window !== 'undefined' && !window.crypto?.randomUUID) {
	window.crypto = window.crypto || {};
	window.crypto.randomUUID = generateUUID;
}

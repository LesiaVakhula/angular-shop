import { InjectionToken } from '@angular/core';

export const GeneratorSequence = new InjectionToken<string>('GeneratorSequence');

export function SequenceGeneratorFactory(take: number) {
    return function() {
        const symbols = 'abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZYZ0123456789';
        let result = '';
        for (let i = 0; i < take; i++) {
            result += symbols.substr(Math.round(Math.random() * 60), 1);
        }
        return result;
    };
}

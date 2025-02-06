import { Injectable } from '@nestjs/common';

@Injectable()
export class Yahtzy5kindService {
    calculateYahtzy5kind(dices: number[]) {
        if (dices.length === 0) {
            throw Error('Dice must be provided');
        }

        if (dices.length !== 5) {
            throw Error('Dice array length must be 5 long');
        }

        const counter = [0, 0, 0, 0, 0];

        dices.forEach((item) => {
            if (item > 6 || item < 1) throw Error('Dice must be between 1-6');
            counter[item - 1] += 1;
        });

        console.log('counter', counter);
        const countFahtzy = counter.some((item) => item === 5);
        if (countFahtzy) {
            return 50;
        } else {
            return 0;
        }
    }
}

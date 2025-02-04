import { Injectable } from '@nestjs/common';

@Injectable()
export class YahtzyAdvanceService {
    sumChance(dice: number[]) {
        if (dice.length === 0) {
            throw Error('Dice must be provided');
        }
        if (dice.length != 5) {
            throw Error('Dice array length must be 5 long');
        }
        let sum = 0;
        dice.map((i) => {
            if (i > 6 || i < 1) {
                throw Error('Dice must be between 1-6');
            }
            sum += i;
        });
        return sum;
    }
}

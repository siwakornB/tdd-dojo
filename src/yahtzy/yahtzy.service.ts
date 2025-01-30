import { Injectable } from '@nestjs/common';

@Injectable()
export class YahtzyService {
    sumDiceByTarget(dice: number[], target: number) {
        let sum = 0;

        dice.map((i) => (i === target ? (sum += target) : null));
        return sum;

        // if (target === 6) {
        //     if (dice[0] === 6) {
        //         sum = sum + 6;
        //     }
        //     if (dice[1] === 6) {
        //         sum = sum + 6;
        //     }
        //     if (dice[2] === 6) {
        //         sum = sum + 6;
        //     }
        //     if (dice[3] === 6) {
        //         sum = sum + 6;
        //     }
        //     if (dice[4] === 6) {
        //         sum = sum + 6;
        //     }
        // }
        // if (target === 5) {
        //     if (dice[0] === 5) {
        //         sum = sum + 5;
        //     }
        //     if (dice[1] === 5) {
        //         sum = sum + 5;
        //     }
        //     if (dice[2] === 5) {
        //         sum = sum + 5;
        //     }
        //     if (dice[3] === 5) {
        //         sum = sum + 5;
        //     }
        //     if (dice[4] === 5) {
        //         sum = sum + 5;
        //     }
        // }
        // if (target === 4) {
        //     if (dice[0] === 4) {
        //         sum = sum + 4;
        //     }
        //     if (dice[1] === 4) {
        //         sum = sum + 4;
        //     }
        //     if (dice[2] === 4) {
        //         sum = sum + 4;
        //     }
        //     if (dice[3] === 4) {
        //         sum = sum + 4;
        //     }
        //     if (dice[4] === 4) {
        //         sum = sum + 4;
        //     }
        // }
        // if (target === 3) {
        //     if (dice[0] === 3) {
        //         sum = sum + 3;
        //     }
        //     if (dice[1] === 3) {
        //         sum = sum + 3;
        //     }
        //     if (dice[2] === 3) {
        //         sum = sum + 3;
        //     }
        //     if (dice[3] === 3) {
        //         sum = sum + 3;
        //     }
        //     if (dice[4] === 3) {
        //         sum = sum + 3;
        //     }
        // }
        // if (target === 1) {
        //     dice[0] === 1 && sum++;
        //     dice[1] === 1 && sum++;
        //     dice[2] === 1 && sum++;
        //     dice[3] === 1 && sum++;
        //     dice[4] === 1 && sum++;
        // }
        // if (target === 2) {
        //     if (dice[0] === 2) {
        //         sum = sum + 2;
        //     }
        //     if (dice[1] === 2) {
        //         sum = sum + 2;
        //     }
        //     if (dice[2] === 2) {
        //         sum = sum + 2;
        //     }
        //     if (dice[3] === 2) {
        //         sum = sum + 2;
        //     }
        //     if (dice[4] === 2) {
        //         sum = sum + 2;
        //     }
        // }
        // return sum;
    }
}

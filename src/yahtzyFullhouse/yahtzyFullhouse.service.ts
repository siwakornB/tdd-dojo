import { Injectable } from '@nestjs/common';

@Injectable()
export class YahtzyFullhouseService {
    calculateFullhouse(dices: number[]) {
        if (dices.length === 0) {
            throw Error('Dice must be provided');
        }

        if (dices.length !== 5) {
            throw Error('Dice array length must be 5 long');
        }

        let countList = [0, 0, 0, 0, 0];

        dices.forEach((item) => {
            if (item > 6 || item < 1) throw Error('Dice must be between 1-6');
            countList[item - 1] += 1;

            // if (item === 1) countList[0] += 1;
            // if (item === 2) countList[1] += 1;
            // if (item === 3) countList[2] += 1;
            // if (item === 4) countList[3] += 1;
            // if (item === 5) countList[4] += 1;
            // if (item === 6) countList[5] += 1;
        });

        const count3 = countList.some((item) => item === 3);
        const count2 = countList.some((item) => item === 2);
        if (count3 && count2) {
            return 25;
        } else {
            return 0;
        }
    }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService {
    getFizzbuzz(num: number): string {
        if (num < 1) return 'Invalid';
        if (num % 3 === 0 && num % 5 === 0) {
            return 'FizzBuzz';
        } else if (num % 3 === 0) {
            return 'Fizz';
        } else if (num % 5 === 0) {
            return 'Buzz';
        }
        return num.toString();
    }
}

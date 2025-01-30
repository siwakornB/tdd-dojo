import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
    let service: FizzbuzzService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FizzbuzzService],
        }).compile();

        service = module.get<FizzbuzzService>(FizzbuzzService);
    });

    describe('Special case', () => {
        it('send 0, expect "Invalid"', () => {
            // arrange
            const input = 0;
            const expectValue = 'Invalid';

            // act
            const result = service.getFizzbuzz(input);

            // expect(service).toBeDefined();
            // assert
            expect(result).toBe(expectValue);
        });
    });

    it('send 1, expect 1', () => {
        // arrange
        const input = 1;
        const expectValue = '1';

        // act
        const result = service.getFizzbuzz(input);

        // expect(service).toBeDefined();
        // assert
        expect(result).toBe(expectValue);
    });

    it('send 3, expect Fizz', () => {
        // arrange
        const input = 3;
        const expectValue = 'Fizz';

        // act
        const result = service.getFizzbuzz(input);

        // expect(service).toBeDefined();
        // assert
        expect(result).toBe(expectValue);
    });

    it('send 5, expect Buzz', () => {
        // arrange
        const input = 5;
        const expectValue = 'Buzz';

        // act
        const result = service.getFizzbuzz(input);

        // expect(service).toBeDefined();
        // assert
        expect(result).toBe(expectValue);
    });

    it('send 6, expect Fizz', () => {
        // arrange
        const input = 6;
        const expectValue = 'Fizz';

        // act
        const result = service.getFizzbuzz(input);

        // expect(service).toBeDefined();
        // assert
        expect(result).toBe(expectValue);
    });

    it('send 8, expect 8', () => {
        // arrange
        const input = 8;
        const expectValue = '8';

        // act
        const result = service.getFizzbuzz(input);

        // expect(service).toBeDefined();
        // assert
        expect(result).toBe(expectValue);
    });

    it('send 9, expect Fizz', () => {
        // arrange
        const input = 9;
        const expectValue = 'Fizz';

        // act
        const result = service.getFizzbuzz(input);

        // expect(service).toBeDefined();
        // assert
        expect(result).toBe(expectValue);
    });

    it('send 10, expect Buzz', () => {
        // arrange
        const input = 10;
        const expectValue = 'Buzz';

        // act
        const result = service.getFizzbuzz(input);

        // expect(service).toBeDefined();
        // assert
        expect(result).toBe(expectValue);
    });

    it('send 13, expect 13', () => {
        // arrange
        const input = 13;
        const expectValue = '13';

        // act
        const result = service.getFizzbuzz(input);

        // expect(service).toBeDefined();
        // assert
        expect(result).toBe(expectValue);
    });

    it('send 15, expect FizzBuzz', () => {
        // arrange
        const input = 15;
        const expectValue = 'FizzBuzz';

        // act
        const result = service.getFizzbuzz(input);

        // expect(service).toBeDefined();
        // assert
        expect(result).toBe(expectValue);
    });

    it('send 20, expect Buzz', () => {
        // arrange
        const input = 20;
        const expectValue = 'Buzz';

        // act
        const result = service.getFizzbuzz(input);

        // expect(service).toBeDefined();
        // assert
        expect(result).toBe(expectValue);
    });

    it('send 30, expect FizzBuzz', () => {
        // arrange
        const input = 30;
        const expectValue = 'FizzBuzz';

        // act
        const result = service.getFizzbuzz(input);

        // expect(service).toBeDefined();
        // assert
        expect(result).toBe(expectValue);
    });
});

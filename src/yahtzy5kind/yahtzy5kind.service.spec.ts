import { Test, TestingModule } from '@nestjs/testing';
import { Yahtzy5kindService } from './yahtzy5kind.service';

describe('Yahtzy5kindService', () => {
    let service: Yahtzy5kindService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [Yahtzy5kindService],
        }).compile();

        service = module.get<Yahtzy5kindService>(Yahtzy5kindService);
    });

    describe('Success Cases', () => {
        it('ต้องได้ผลลัพท์เป็น 0 เมื่อส่ง dice [3,3,3,3,3]', () => {
            // arrange
            const dice = [3, 3, 3, 3, 3];
            const expected = 50;

            // act
            const result = service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toBe(expected);
        });
    });

    describe('Alternative Cases', () => {
        it('ต้องได้ผลลัพท์เป็น 0 เมื่อส่ง dice [2,3,3,3,3]', () => {
            // arrange
            const dice = [2, 3, 3, 3, 3];
            const expected = 0;

            // act
            const result = service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 0 เมื่อส่ง dice [3,3,3,3,1]', () => {
            // arrange
            const dice = [3, 3, 3, 3, 1];
            const expected = 0;

            // act
            const result = service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 0 เมื่อส่ง dice [3,3,3,1,3]', () => {
            // arrange
            const dice = [3, 3, 3, 1, 3];
            const expected = 0;

            // act
            const result = service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 0 เมื่อส่ง dice [3,3,1,3,3]', () => {
            // arrange
            const dice = [3, 3, 1, 3, 3];
            const expected = 0;

            // act
            const result = service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 0 เมื่อส่ง dice [3,1,3,3,3]', () => {
            // arrange
            const dice = [3, 1, 3, 3, 3];
            const expected = 0;

            // act
            const result = service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 0 เมื่อส่ง dice [1,3,3,3,3]', () => {
            // arrange
            const dice = [1, 3, 3, 3, 3];
            const expected = 0;

            // act
            const result = service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice must be provided" เมื่อส่ง dice []', () => {
            // arrange
            const dice = [];
            const expected = 'Dice must be provided';

            // act
            const result = () => service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice array length must be 5 long" เมื่อส่ง dice [1,3,4]', () => {
            // arrange
            const dice = [1, 3, 4];
            const expected = 'Dice array length must be 5 long';

            // act
            const result = () => service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice array length must be 5 long" เมื่อส่ง dice [1,3,4,1,1,1] ', () => {
            // arrange
            const dice = [1, 3, 4, 1, 1, 1];
            const expected = 'Dice array length must be 5 long';

            // act
            const result = () => service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice must be between 1-6" เมื่อส่ง dice [2,2,7,7,7]', () => {
            // arrange
            const dice = [2, 2, 7, 7, 7];
            const expected = 'Dice must be between 1-6';

            // act
            const result = () => service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice must be between 1-6" เมื่อส่ง dice [2,2,-1,-1,-1]', () => {
            // arrange
            const dice = [2, 2, -1, -1, -1];
            const expected = 'Dice must be between 1-6';

            // act
            const result = () => service.calculateYahtzy5kind(dice);

            // assert
            expect(result).toThrow(expected);
        });
    });
});

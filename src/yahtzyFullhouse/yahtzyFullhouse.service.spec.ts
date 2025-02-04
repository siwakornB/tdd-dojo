import { Test, TestingModule } from '@nestjs/testing';
import { YahtzyFullhouseService } from './yahtzyFullhouse.service';

describe('YahtzyFullhouseService', () => {
    let service: YahtzyFullhouseService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [YahtzyFullhouseService],
        }).compile();

        service = module.get<YahtzyFullhouseService>(YahtzyFullhouseService);
    });

    describe('Success Cases', () => {
        it('ต้องได้ผลลัพท์เป็น 25 เมื่อส่ง dice [2,2,3,3,3]', () => {
            const dice = [2, 2, 3, 3, 3];
            const expected = 25;

            const result = service.calculateFullhouse(dice);

            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 25 เมื่อส่ง dice [2,3,3,3,2]', () => {
            const dice = [2, 3, 3, 3, 2];
            const expected = 25;

            const result = service.calculateFullhouse(dice);

            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 25 เมื่อส่ง dice [3,2,3,2,3]', () => {
            const dice = [3, 2, 3, 2, 3];
            const expected = 25;

            const result = service.calculateFullhouse(dice);

            expect(result).toBe(expected);
        });
    });

    describe('Alternative Cases', () => {
        it('ต้องได้ผลลัพท์เป็น 0 เมื่อส่ง dice [2,3,3,3,3]', () => {
            // arrange
            const dice = [2, 3, 3, 3, 3];
            const expected = 0;

            // act
            const result = service.calculateFullhouse(dice);

            // assert
            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 0 เมื่อส่ง dice [3,3,3,3,3]', () => {
            // arrange
            const dice = [3, 3, 3, 3, 3];
            const expected = 0;

            // act
            const result = service.calculateFullhouse(dice);

            // assert
            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice must be provided" เมื่อส่ง dice []', () => {
            // arrange
            const dice = [];
            const expected = 'Dice must be provided';

            // act
            const result = () => service.calculateFullhouse(dice);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice array length must be 5 long" เมื่อส่ง dice [1,3,4]', () => {
            // arrange
            const dice = [1, 3, 4];
            const expected = 'Dice array length must be 5 long';

            // act
            const result = () => service.calculateFullhouse(dice);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice array length must be 5 long" เมื่อส่ง dice [1,3,4,1,1,1] ', () => {
            // arrange
            const dice = [1, 3, 4, 1, 1, 1];
            const expected = 'Dice array length must be 5 long';

            // act
            const result = () => service.calculateFullhouse(dice);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice must be between 1-6" เมื่อส่ง dice [2,2,7,7,7]', () => {
            // arrange
            const dice = [2, 2, 7, 7, 7];
            const expected = 'Dice must be between 1-6';

            // act
            const result = () => service.calculateFullhouse(dice);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice must be between 1-6" เมื่อส่ง dice [2,2,-1,-1,-1]', () => {
            // arrange
            const dice = [2, 2, -1, -1, -1];
            const expected = 'Dice must be between 1-6';

            // act
            const result = () => service.calculateFullhouse(dice);

            // assert
            expect(result).toThrow(expected);
        });
    });
});

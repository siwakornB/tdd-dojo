import { Test, TestingModule } from '@nestjs/testing';
import { YahtzyService } from './yahtzy.service';

describe('YahtzyService', () => {
    let service: YahtzyService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [YahtzyService],
        }).compile();

        service = module.get<YahtzyService>(YahtzyService);
    });

    describe('Success Cases', () => {
        it('ต้องได้ผลลัพท์เป็น 2 เมื่อส่ง dice [1,2,2,1,2] และ target เป็น 1', () => {
            const dice = [1, 2, 2, 1, 2];
            const target = 1;
            const expected = 2;

            const result = service.sumDiceByTarget(dice, target);

            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 6 เมื่อส่ง dice [2,2,2,5,1] และ target เป็น 2', () => {
            const dice = [2, 2, 2, 5, 1];
            const target = 2;
            const expected = 6;

            const result = service.sumDiceByTarget(dice, target);

            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 3 เมื่อส่ง dice [2,3,2,5,1] และ target เป็น 3', () => {
            const dice = [2, 3, 2, 5, 1];
            const target = 3;
            const expected = 3;

            const result = service.sumDiceByTarget(dice, target);

            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 20 เมื่อส่ง dice [4,4,4,4,4] และ target เป็น 4', () => {
            const dice = [4, 4, 4, 4, 4];
            const target = 4;
            const expected = 20;

            const result = service.sumDiceByTarget(dice, target);

            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 15 เมื่อส่ง dice [5,5,5,2,1] และ target เป็น 5', () => {
            const dice = [5, 5, 5, 2, 1];
            const target = 5;
            const expected = 15;

            const result = service.sumDiceByTarget(dice, target);

            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น 12 เมื่อส่ง dice [6,6,5,3,1] และ target เป็น 6', () => {
            const dice = [6, 6, 5, 3, 1];
            const target = 6;
            const expected = 12;

            const result = service.sumDiceByTarget(dice, target);

            expect(result).toBe(expected);
        });
    });

    describe('Alternative Cases', () => {
        it('ต้องได้ผลลัพท์เป็น 0 เมื่อส่ง dice [2,3,2,5,1] และ target เป็น 4', () => {
            // arrange
            const dice = [2, 3, 2, 5, 1];
            const target = 4;
            const expected = 0;

            // act
            const result = service.sumDiceByTarget(dice, target);

            // assert
            expect(result).toBe(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice must be provided" เมื่อส่ง dice [] และ target เป็น 3', () => {
            // arrange
            const dice = [];
            const target = 3;
            const expected = 'Dice must be provided';

            // act
            const result = () => service.sumDiceByTarget(dice, target);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice array length must be 5 long" เมื่อส่ง dice [1,3,4] และ target เป็น 1', () => {
            // arrange
            const dice = [1, 3, 4];
            const target = 1;
            const expected = 'Dice array length must be 5 long';

            // act
            const result = () => service.sumDiceByTarget(dice, target);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice array length must be 5 long" เมื่อส่ง dice [1,3,4,1,1,1] และ target เป็น 1', () => {
            // arrange
            const dice = [1, 3, 4, 1, 1, 1];
            const target = 1;
            const expected = 'Dice array length must be 5 long';

            // act
            const result = () => service.sumDiceByTarget(dice, target);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Target must be between 1-6" เมื่อส่ง dice [2,3,2,5,1] และ target เป็น -1', () => {
            // arrange
            const dice = [2, 3, 2, 5, 1];
            const target = -1;
            const expected = 'Target must be between 1-6';

            // act
            const result = () => service.sumDiceByTarget(dice, target);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Target must be between 1-6" เมื่อส่ง dice [2,3,2,5,1] และ target เป็น 7', () => {
            // arrange
            const dice = [2, 3, 2, 5, 1];
            const target = 7;
            const expected = 'Target must be between 1-6';

            // act
            const result = () => service.sumDiceByTarget(dice, target);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice must be between 1-6" เมื่อส่ง dice [2,3,2,5,7] และ target เป็น 1', () => {
            // arrange
            const dice = [2, 3, 2, 5, 7];
            const target = 1;
            const expected = 'Dice must be between 1-6';

            // act
            const result = () => service.sumDiceByTarget(dice, target);

            // assert
            expect(result).toThrow(expected);
        });

        it('ต้องได้ผลลัพท์เป็น "Dice must be between 1-6" เมื่อส่ง dice [2,3,2,5,-1] และ target เป็น 1', () => {
            // arrange
            const dice = [2, 3, 2, 5, -1];
            const target = 1;
            const expected = 'Dice must be between 1-6';

            // act
            const result = () => service.sumDiceByTarget(dice, target);

            // assert
            expect(result).toThrow(expected);
        });
    });
});

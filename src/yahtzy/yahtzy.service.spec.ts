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

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FizzbuzzService } from './fizzbuzz/fizzbuzz.service';
import { YahtzyService } from './yahtzyBasic/yahtzyBasic.service';
import { YahtzyAdvanceService } from './yahtzyChance/yahtzyChance.service';
import { YahtzyFullhouseService } from './yahtzyFullhouse/yahtzyFullhouse.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [
        AppService,
        FizzbuzzService,
        YahtzyService,
        YahtzyAdvanceService,
        YahtzyFullhouseService,
    ],
})
export class AppModule {}

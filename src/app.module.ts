import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FizzbuzzService } from './fizzbuzz/fizzbuzz.service';
import { YahtzyService } from './yahtzyBasic/yahtzyBasic.service';
import { YahtzyAdvanceService } from './yahtzyChance/yahtzyChance.service';
import { YahtzyFullhouseService } from './yahtzyFullhouse/yahtzyFullhouse.service';
import { Yahtzy5kindService } from './yahtzy5kind/yahtzy5kind.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [
        AppService,
        FizzbuzzService,
        YahtzyService,
        YahtzyAdvanceService,
        YahtzyFullhouseService,
        Yahtzy5kindService,
    ],
})
export class AppModule {}

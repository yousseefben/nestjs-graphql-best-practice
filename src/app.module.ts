import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { TypeOrmConfigService } from './typeorm.config.service';
import { GraphqlConfigService } from './graphql.config.service';
import { CacheConfigService } from './cache.config.service';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlConfigService,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    CacheModule.registerAsync({
      useClass: CacheConfigService,
    }),
    UserModule,
    // AuthModule,
    // EventsModule,
  ],
  providers: [EventsGateway],
})
export class AppModule {}

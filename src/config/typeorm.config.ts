import {TypeOrmModule}  from '@nestjs/typeorm';

export  const typeOrmConfig : TypeOrmModule  ={
    type: '',
    host : '',
    port: '',
    username: '',
    password: '',
    database: '',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize : true,
}
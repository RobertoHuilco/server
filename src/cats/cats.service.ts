import { Get, Injectable, Param } from '@nestjs/common';

@Injectable()
export class CatsService {
    private materias=[
        {id:1,nombre:"Lengua",profesor:"luis"},
        {id:2,nombre:"Quimica",profesor:"Juan"},
        {id:3,nombre:"Matematica",profesor:"Miguel"}
    ];
    // @Get(':id')

    // getById(@Param('id') id:string){  
    //     return this.materias[id];
    // }
    getAll() {
        return this.materias;
      }
}

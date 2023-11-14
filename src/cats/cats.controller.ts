import { Controller, Get, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly CatsService: CatsService) { }
    @Get()
    
    getAllProducts() {
        return this.CatsService.getAll();
    }


    // private carros = ['toyota','Mazda','Hyundai'];
    // @Get()

    // getmaterias(){
    //     return this.carros;
    // }

    // @Get(':id')

    // getById(@Param('id') id:string){  
    //     return this.carros[id];
    // }    
}

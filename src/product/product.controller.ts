/* eslint-disable prettier/prettier */
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guard/auth/auth.guard';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService){}

    @Get()
    @UseGuards(AuthGuard)
    getProducts(){
        return this.productService.getAllProduct()
    }

    @Get(":id")
    getProduct(@Param("id") id:string){
        return this.productService.getProductById(Number(id)) 
    }
    
    // modules -- related controller and related service sob modules er moddeh thakbe , basic module mane holo basic controller and service -- sob feature er alada module thakbe ** ak module er moddeh controler ,service,provider sob aksathe thakbe , moduile holo core part 
    // app.module holo parent module, alada feature  

    






}

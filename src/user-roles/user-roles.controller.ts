/* eslint-disable prettier/prettier */
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guard/roles/roles.decorator';
import { Role } from 'src/guard/roles/roles.enums';
import { RolesGuard } from 'src/guard/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAllAdminData(){
        return {message: "admin data found!"} 
    }

    @Get('user-data')
    getUserData(){
        return {message: "all user data get!"}
    }


}

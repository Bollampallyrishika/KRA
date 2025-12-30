/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
//!user is route
@Controller('user')//decorator  tells to nest js ist is not simple class it it is a controller that handle http request
export class UserController {
@Get()
getUser(){
    return 'user data fetched sucessfully!!';
}

}

import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { request, Response } from 'express';



@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx=host.switchToHttp();//req and res
    const response =ctx.getResponse<Response>();
    const status =exception.getStatus();

    response.status(status).json({
      statusCode:status,
      timeStamp:new Date().toISOString(),
      path:request.url,
      message:exception.message
    })

  }
}

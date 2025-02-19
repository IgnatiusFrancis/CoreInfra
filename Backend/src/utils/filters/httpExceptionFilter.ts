import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const isHttp = !!response && !!request;
    const isWebSocket = host.getType() === 'ws';

    let status: number;
    let message: string;
    let data: any;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
      data = exception.getResponse();
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal server error';
      data = null;
    }

    if (isHttp) {
      response.status(status).json({
        status: 'error',
        message,
        data,
        timestamp: new Date().toISOString(),
      });
    } else if (isWebSocket) {
      const client = host.switchToWs().getClient();
      client.emit('exception', {
        status: 'error',
        message,
        data,
        timestamp: new Date().toISOString(),
      });
    }

    this.logger.error(`Exception: ${message}`, exception);
  }
}

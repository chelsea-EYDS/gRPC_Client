import {
	Body,
	Controller,
	Post,
	OnModuleInit,
  Logger
} from '@nestjs/common'
import { Transport, Client, ClientGrpc } from '@nestjs/microservices'
import { AddInputs, IGrpcService } from './grpc.interface'
import {join} from 'path'
// const protobuf = require('protobufjs')

@Controller()
export class AppController implements OnModuleInit {
	private logger = new Logger('App Controller');
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'inputs',
      protoPath: join(__dirname, '../src/inputs.proto'),
    }
  })
  private client: ClientGrpc
  private grpcService: IGrpcService
  

	onModuleInit() {
		this.grpcService = this.client.getService<IGrpcService>('AppController')
	}

  @Post('add')
  async addInputs(@Body('inputs') inputs: AddInputs){
    
    // console.log(addInputs, "data")


    return this.grpcService.addInput(inputs)
  }
}
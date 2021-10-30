import { MicroserviceOptions, Transport } from "@nestjs/microservices"
import { join } from "path"

export const microserviceOptions: MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'inputs',
    protoPath: join(__dirname, '../src/inputs.proto'),
  }
  }
import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
  	app.enableCors({
		origin: true,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
		credentials: true,
	})

	
	
	app.setGlobalPrefix('api')

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
		})
	)

  const port = 5002
	await app.listen(port)
	console.log(`listening on port ${await app.getUrl()}`)


}
bootstrap()
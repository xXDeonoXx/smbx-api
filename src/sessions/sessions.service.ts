import { Injectable } from '@nestjs/common';

export interface AuthenticationResponse {
  user: {
    id: number;
    name: string;
    email: string;
    nickname: string;
  };
  token: string;
}

export class AuthenticationRequest {
  email: string;
  password: string;
}

@Injectable()
export class SessionsService {
  async authenticate({
    email,
    password,
  }: AuthenticationRequest): Promise<AuthenticationResponse> {
    // const user = await this.repository.findOne({
    //     where: { email, active: true },
    //     relations: ['roles', 'plan'],
    // });

    // if (!user) {
    //     throw new HttpStatusError(
    //         HttpStatus.NOT_FOUND,
    //         'Email ou senha incorretos.',
    //     );
    // }

    // if (platform) {
    //     const requiredRolesForThisPlatform: string[] = platforms[platform];
    //     const roles = user.roles.map(({ initials }) => initials);
    //     if (
    //         requiredRolesForThisPlatform.every(role =>
    //             roles.every(userRole => role !== userRole),
    //         )
    //     ) {
    //         throw new HttpStatusError(
    //             HttpStatus.FORBIDDEN,
    //             'Plataforma Incorreta',
    //         );
    //     }
    // }

    // const match = await compare(password, user.password);

    // if (!match) {
    //     throw new HttpStatusError(
    //         HttpStatus.UNAUTHORIZED,
    //         'Senha incorreta.',
    //     );
    // }
    // const roles = user.roles.map(role => role.initials);

    // const token = sign({ roles }, TOKEN_SECRET, {
    //     subject: user.id.toString(),
    //     expiresIn: TOKEN_EXPIRATION,
    // });

    // const { id, name, plan, nickname, image_url } = user;

    // if (push_id && user.pushId !== push_id) {
    //     user.pushId = push_id;
    //     await this.repository.save(
    //         this.repository.merge(user, {
    //             pushId: push_id,
    //         }),
    //     );
    // }

    // if (user.pushId) {
    //     const app = platform === Platform.CAPP ? 'Colaborador' : 'W.A';

    //     const service = new PushNotificationService();

    //     service.sendNotification({
    //         ids: [push_id],
    //         body: `Você fez login no APP ${app}`,
    //         title: 'Bem vindo.',
    //     });
    // }

    return {
      user: {
        id: 1,
        name: 'jorge',
        email: 'jorginho@email',
        nickname: 'Jorgete',
      },
      token: 'Bearer 321654321654987654',
    };
  }
}

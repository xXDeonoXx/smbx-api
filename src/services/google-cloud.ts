import { Storage } from '@google-cloud/storage';
import { HttpException, HttpStatus } from '@nestjs/common';

export class GoogleCloud {
  constructor(
    private storage = new Storage({
      keyFilename: process.env.GOOGLE_CLOUD_AUTHENTICATION,
      projectId: 'erudite-flag-273620',
    }),
  ) {}

  async uploadFile(file): Promise<string> {
    try {
      console.log(file);

      // TODO need to make file public and return url in this function
      const res = await this.storage
        .bucket('smbx-levels')
        .upload(`${file.path}`, {
          destination: `${file.filename}-${file.originalname}`,
          public: true,
        });
      return res[0].publicUrl();
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Failed to upload file',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

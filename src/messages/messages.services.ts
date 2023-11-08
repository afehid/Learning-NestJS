import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

// interface Repository {
//   findOne(id: string);
//   findAll();
//   create(content: string);
// }
// if we use Public in contstructor we don't have to write this.args
@Injectable()
export class MessagesService {
  constructor(public messageRepo: MessagesRepository) {}
  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  create(content: string) {
    return this.messageRepo.create(content);
  }
}

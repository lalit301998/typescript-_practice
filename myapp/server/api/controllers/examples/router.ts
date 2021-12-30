import express from 'express';
import controller from './controller';
import appcontroller from './app';
export default express
  .Router()
  .post('/', controller.create)
  .get('/', controller.all)
  .get('/:id', controller.byId)
  .get('/app', appcontroller.ServerHealthCheck);

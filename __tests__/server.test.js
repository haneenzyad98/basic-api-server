'use strict';

const server = require('../src/server');

const supertest = require("supertest");
const serverRequest = supertest(server.app);


describe('Server Module', ()=> {
    it('404 on a bad route', async ()=> {
        let response = await serverRequest.get('/not-found-route');
        expect(response.status).toEqual(404);
    });
    it('404 on a bad method', async ()=> {
        let response = await serverRequest.post('/person');
        expect(response.status).toEqual(404);
    });



describe(' food API',()=>{
    it('post',async ()=>{
      let res=await serverRequest.post('/food').send({
        food:'fish',
      });
      expect(res.status).toEqual(201);
      expect(res.body.record.food).toEqual('fish');
      id= res.body.id;
    });
    it('get all food', async () => {
      const response = await serverRequest.get('/food');
      expect(response.status).toEqual(200);
    });
    it('get food With id', async () => {
      const res = await serverRequest.get(`/food/${id}`);
      expect(res.status).toEqual(200);
      expect(res.body.record.food).toEqual('fish');
      
    });
    it('update food', async () => {
      const res = await serverRequest.put(`/food/${id}`).send({
        food:'rice',
      });
      expect(res.status).toEqual(200);
      expect(res.body.record.food).toEqual('rice');
      
    });
    it('delete food With id', async () => {
      const res = await serverRequest.delete(`/food/${id}`);
      expect(res.status).toEqual(202);
    });
  });

  

});
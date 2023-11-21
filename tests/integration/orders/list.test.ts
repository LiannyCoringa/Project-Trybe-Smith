import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import orderService from '../../../src/services/order.service';
import app from '../../../src/app';
import orderMock from '../../mocks/order.mock';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('deve retornar um status 200 com uma lista de pedidos', async function () {
    const mockFindAll = OrderModel.build(orderMock.validOrderListFromDB);
    sinon.stub(OrderModel, 'findAll').resolves([mockFindAll]);

    const response = await chai.request(app).get('/orders').send();

    expect(response.status).to.equal(200);
    expect(response.body).to.be.eql(orderMock.validOrderList);
  });
});

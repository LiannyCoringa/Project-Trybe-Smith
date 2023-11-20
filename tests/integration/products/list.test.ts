import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';
import productService from '../../../src/services/product.service';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('deve retornar um status 200 com uma lista de produtos', async function () {
    const mockFindAll = ProductModel.build(productMock.validProductListFromDB);
    sinon.stub(productService, 'findAll').resolves({ status: 'SUCCESSFUL', data: [mockFindAll] });

    const response = await chai.request(app).get('/products').send();

    expect(response.status).to.equal(200);
    expect(response.body).to.be.eql(productMock.validProductList);
  });
});

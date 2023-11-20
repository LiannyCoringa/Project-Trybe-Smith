import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productMock from '../../mocks/product.mock';
import productModel from '../../../src/database/models/product.model';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('deve retornar um status 201 com um produto criado', async function () {
    const product = productMock.validProductFromDB;
    const mockCreateReturn = ProductModel.build(product);

    sinon.stub(productModel, 'create').resolves(mockCreateReturn);

    const response = await productService.create(product);

    expect(response.status).to.be.equal('SUCCESSFUL');
    expect(response.data).to.be.deep.equal(productMock.validProductToCreate);
  });

});

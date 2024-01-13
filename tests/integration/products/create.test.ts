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
  it('ao não receber um name, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = productMock.noNameBody;

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"name" is required' });
  });
  it('ao não receber um price, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = productMock.noPriceBody;

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"price" is required' });
  });
  it('ao receber um name do tipo number, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = productMock.noStringNameBody;

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: '"name" must be a string' });
  });
  it('ao receber um price do tipo number, retorne um erro', async function () {
   // Arrange
   const httpRequestBody = productMock.noStringPriceBody;

   // Act
   const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

   // Assert
   expect(httpResponse.status).to.equal(422);
   expect(httpResponse.body).to.be.deep.equal({ message: '"price" must be a string' });
  });
  it('ao receber um name menor que 3 caracteres, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = productMock.noLengthNameBody;
 
    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
 
    // Assert
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: '"name" length must be at least 3 characters long' });
   });
   it('ao receber um price menor que 3 caracteres, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = productMock.noLengthPriceBody;
 
    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
 
    // Assert
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ message: '"price" length must be at least 3 characters long' });
   });
  it('deve retornar um status 201 com um produto criado', async function () {
    const product = productMock.validProductFromDB;
    const mockCreateReturn = ProductModel.build(product);

    sinon.stub(productModel, 'create').resolves(mockCreateReturn);

    const response = await productService.create(product);

    expect(response.status).to.be.equal('SUCCESSFUL');
    expect(response.data).to.be.deep.equal(productMock.validProductToCreate);
  });
});

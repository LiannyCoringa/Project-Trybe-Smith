import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controllers/login.controller';
import loginMock from '../../mocks/login.mock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { Token } from '../../../src/types/Token';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;
  const messageUsernameOrPasswordEmpty = '"username" and "password" are required';
  const messageUsernameOrPasswordInvalid = 'Username or password invalid';

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });
  describe('#login', function () {
    it('ao não receber um username, retorne um erro', async function () {
        // Arrange
        req.body = loginMock.noUsernameLoginBody;
     
        const serviceResponse: ServiceResponse<Token> = {
          status: 'INVALID_DATA',
          data: { message: messageUsernameOrPasswordEmpty },
        }
        sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);
      
        // Act
        await loginController.login(req, res);
        
        // Assert
        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.have.been.calledWith({ message: messageUsernameOrPasswordEmpty });
      });
      it('ao não receber uma senha, retorne um erro', async function () {
        // Arrange
        req.body = loginMock.noPasswordLoginBody;
        const serviceResponse: ServiceResponse<Token> = {
          status: 'INVALID_DATA',
          data: { message: messageUsernameOrPasswordEmpty },
        }
        sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);
        
        // Act
        await loginController.login(req, res);
        
        // Assert
        expect(res.status).to.have.been.calledWith(400);
        expect(res.json).to.have.been.calledWith({ message: messageUsernameOrPasswordEmpty });
      });
      it('ao receber um username que não está cadastrado, retorne um erro', async function () {
        // Arrange
        req.body = loginMock.notExistingUserBody;
        const serviceResponse: ServiceResponse<Token> = {
          status: 'UNAUTHORIZED',
          data: { message: messageUsernameOrPasswordInvalid },
        }
        sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);

        // Act
        await loginController.login(req, res);

        // Assert
        expect(res.status).to.have.been.calledWith(401);
        expect(res.json).to.have.been.calledWith({ message: messageUsernameOrPasswordInvalid });
      });
      it('ao receber uma senha inválida, retorne um erro', async function () {
        // Arrange
        req.body = loginMock.existingUserWithWrongPasswordBody;
        const serviceResponse: ServiceResponse<Token> = {
          status: 'UNAUTHORIZED',
          data: { message: messageUsernameOrPasswordInvalid },
        }
        sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);
        
        // Act
        await loginController.login(req, res);
        
        // Assert
        expect(res.status).to.have.been.calledWith(401);
        expect(res.json).to.have.been.calledWith({ message: messageUsernameOrPasswordInvalid });
      });
      it('ao receber um username e uma senha válida, retorne um token de login', async function () {
        // Arrange
        req.body = loginMock.validLoginBody;

        const token = { token: 'm1nh4t0k3nbcr1p7v4l1d4' }
        const serviceResponse: ServiceResponse<Token> = {
          status: 'SUCCESSFUL',
          data: token,
        }
        sinon.stub(loginService, 'verifyLogin').resolves(serviceResponse);
        
        // Act
        await loginController.login(req, res);
        
        // Assert
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWith(token);
      });
  });
});

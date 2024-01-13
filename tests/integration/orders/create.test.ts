import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import orderMock from '../../mocks/order.mock';
import app from '../../../src/app';
import { or } from 'sequelize';
import UserModel from '../../../src/database/models/user.model';
import OrderModel from '../../../src/database/models/order.model';
import orderService from '../../../src/services/order.service';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });
 
});

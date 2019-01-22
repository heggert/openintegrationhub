// General configuration file for variable urls, settings, etc.

const general = {
  iamBaseUrl: process.env.IAM_BASE_URL || 'http://localhost:3099',
  iamApiBaseUrl: process.env.IAM_API_BASE_URL || 'http://localhost:3099',
  mongoUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/icrdev',
  oihViewerRoles: ['ADMIN'],
  tenantWriterRoles: ['TENANT_ADMIN', 'TENANT_INTEGRATOR'],
  flowReadPermission: process.env.FLOW_READ_PERMISSION || 'flows.read',
  flowWritePermission: process.env.FLOW_WRITE_PERMISSION || 'flows.write',

  // Designates which storage system (Mongo, Kubernetes, MySQL, etc.) is used
  storage: 'mongo',
};

module.exports = general;

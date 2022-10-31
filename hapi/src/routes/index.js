const healthzRoute = require('./healthz.route')
const addAccessRoute = require('./add-access.route')
const revokeAccessRoute = require('./revoke-access.route')
const updateAccessRoute = require('./update-access.route')
const getEosioVotersRoute = require('./get-eosio-voters.route')
const getMembersRoute = require('./get-members.route')
const getVotesRoute = require('./get-votes.route')

module.exports = [
  healthzRoute,
  addAccessRoute,
  revokeAccessRoute,
  updateAccessRoute,
  getEosioVotersRoute,
  getMembersRoute,
  getVotesRoute
]

/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-gremlin-client-js/vertx_gremlin_client */
var utils = require('vertx-js/util/utils');
var Vertx = require('vertx-js/vertx');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JVertxGremlinClient = com.monogram.vertx.gremlin.VertxGremlinClient;

/**
 @class
*/
var VertxGremlinClient = function(j_val) {

  var j_vertxGremlinClient = j_val;
  var that = this;

  /**

   @public
   @param document {Object} 
   @param resultHandler {function} 
   */
  this.process = function(document, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_vertxGremlinClient["process(io.vertx.core.json.JsonObject,io.vertx.core.Handler)"](utils.convParamJsonObject(document), function(ar) {
      if (ar.succeeded()) {
        resultHandler(utils.convReturnJson(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_vertxGremlinClient;
};

/**

 @memberof module:vertx-gremlin-client-js/vertx_gremlin_client
 @param vertx {Vertx} 
 @return {VertxGremlinClient}
 */
VertxGremlinClient.create = function(vertx) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
    return utils.convReturnVertxGen(JVertxGremlinClient["create(io.vertx.core.Vertx)"](vertx._jdel), VertxGremlinClient);
  } else throw new TypeError('function invoked with invalid arguments');
};

/**

 @memberof module:vertx-gremlin-client-js/vertx_gremlin_client
 @param vertx {Vertx} 
 @param address {string} 
 @return {VertxGremlinClient}
 */
VertxGremlinClient.createProxy = function(vertx, address) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'string') {
    return utils.convReturnVertxGen(JVertxGremlinClient["createProxy(io.vertx.core.Vertx,java.lang.String)"](vertx._jdel, address), VertxGremlinClient);
  } else throw new TypeError('function invoked with invalid arguments');
};

// We export the Constructor function
module.exports = VertxGremlinClient;
"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable(
    "products",
    {
      id: { type: "int", primaryKey: true },
      name: "string",
      created_at: "datetime",
      updated_at: "datetime",
    },
    callback
  );
};

exports.down = function (db, callback) {
  db.dropTable("products", callback);
};

exports._meta = {
  version: 1,
};

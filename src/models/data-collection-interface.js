'use strict';
const pool = require('../pool')

class Interface {
 
  constructor(table,name){
  this.table=table;
  this.itemName=name
 }

  create(obj) {
    console.log(this.name)
    const sql = `INSERT INTO ${this.itemName} (itemName,price) VALUES ($1,$2) RETURNING *;`;
    const safeValues = [obj.itemName, obj.price];
    return pool.query(sql, safeValues);
  }

  read(id) {
    if (id) {
      return pool.query(`SELECT * FROM ${this.itemName} WHERE id=$1;`, [id]);
    }
    return pool.query(`SELECT * FROM ${this.itemName};`);
  }


  update(id, obj) {
    const sql = `UPDATE ${this.itemName} SET itemName=$1,price=$2 WHERE id=$3 RETURNING *;`;
    const safeValues = [obj.itemName, obj.price, id];
    return pool.query(sql, safeValues);
  }
  

  delete(id) {
    return pool.query(`DELETE FROM ${this.itemName} WHERE id=$1 RETURNING *;`, [id]);
  }
}

module.exports = Interface;


import Api from "../Api";
import secrets from "../../../secrets.example";
export default {
  getTables() {
    return Api(secrets.URL_LARAVEL + "tables").get();
  },
  getTableById(id) {
    return Api(secrets.URL_LARAVEL).get(`tables/${id}`);
  },
  deteleTable(id) {
    return Api(secrets.URL_LARAVEL + "tables/" + id).delete();
  },
  UpdateTable(table){
    return Api(secrets.URL_LARAVEL).put(`/tables/${table.id}` ,table);
  },
  createTable(table) {
    return Api(secrets.URL_LARAVEL).post("tables", table);
  },
};

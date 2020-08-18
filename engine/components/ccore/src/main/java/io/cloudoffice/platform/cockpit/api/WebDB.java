/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package io.cloudoffice.platform.cockpit.api;

import io.cloudoffice.platform.cockpit.js.LocalStorage;
import io.cloudoffice.platform.cockpit.js.MomentJS;
import java.util.Map;

public interface WebDB {

    /**
     * ROW OPERATION NOT PERMITED ONLY JSON ARRAY STORE AND GET
     */
    public interface Table {
        
        public boolean exists(String name);
        
        public void createTable(String name);

        /**
         *
         * @param tableName
         * @param array jsonarray data {@link MapBuilder}
         */
        public void updateTable(String tableName, String array);

        /**
         *
         * @param tableName
         * @return jsonarray data {@link MapBuilder}
         */
        public MapBuilder getAll(String tableName);
        
        public void delete(String tableName);
        
        public void addRow(String tableName, String row);
    }
    
    public class TableManager implements Table {
        
        public Component getOwner() {
            return owner;
        }
        
        public void setOwner(Component owner) {
            this.owner = owner;
        }
        
        Component owner;
        
        public TableManager(Component owner) {
            this.owner = owner;
        }
        
        private String getTableName(String name) {
            return this.owner.getClass().getName() + "." + name;
        }
        
        private String getTableMetaName(String name) {
            return this.owner.getClass().getName() + "." + name + ".meta";
        }
        
        @Override
        public boolean exists(String name) {
            return (null != LocalStorage.getBean(getTableName(name)));
        }
        
        @Override
        public void createTable(String name) {
            if (null == LocalStorage.getBean(getTableMetaName(name))) {
                MapBuilder meta = MapBuilder.builder().addField("time", MomentJS.getCurrentUnixTime())
                        .addField("tableName", getTableName(name))
                        .addField("lastUpdated", MomentJS.getCurrentUnixTime());
                LocalStorage.setBean(getTableMetaName(name), meta.toJSON());
                LocalStorage.setBean(getTableName(name), MapBuilder.arrayBuilder().toJSON());
            }
        }
        
        @Override
        public void updateTable(String tableName, String array) {
            String meta = LocalStorage.getBean(getTableMetaName(tableName));
            MapBuilder metaBuilder = MapBuilder.query(meta);
            Map metamap = metaBuilder.get();
            metamap.put("lastUpdated", MomentJS.getCurrentUnixTime());
            LocalStorage.setBean(getTableName(tableName), array);
            LocalStorage.setBean(getTableMetaName(tableName), MapBuilder.query(metamap).toJSON());
            
        }
        
        @Override
        public MapBuilder getAll(String tableName) {
            String result = LocalStorage.getBean(getTableName(tableName));
            return MapBuilder.query(result, true);
        }
        
        @Override
        public void delete(String tableName) {
            LocalStorage.remove(getTableName(tableName));
            LocalStorage.remove(getTableMetaName(tableName));
        }
        
        @Override
        public void addRow(String tableName, String row) {
            MapBuilder result = getAll(tableName);
            result.getArray().add(MapBuilder.query(row).get());
            updateTable(tableName, result.toJSON());
        }
        
    }
    
    public class IndexTableManager implements IndexedTable {
        
        public Component getOwner() {
            return owner;
        }
        
        public void setOwner(Component owner) {
            this.owner = owner;
        }
        
        Component owner;
        
        public IndexTableManager(Component owner) {
            this.owner = owner;
        }
        
        private String getTableMetaName() {
            return this.owner.getClass().getName() + ".indexmeta";
        }
        
        @Override
        public boolean exists(String name) {
            
            return (null != findByPrimaryKey(name));
        }
        
        @Override
        public void createTable() {
            if (null == LocalStorage.getBean(getTableMetaName())) {
                MapBuilder meta = MapBuilder.builder().addField("time", MomentJS.getCurrentUnixTime())
                        .addField("lastUpdated", MomentJS.getCurrentUnixTime());
                LocalStorage.setBean(getTableMetaName(), meta.toJSON());
            }
        }
        
        @Override
        public void save(String primaryKeyValue, String row) {
            MapBuilder table = MapBuilder.query(LocalStorage.getBean(getTableMetaName()));
            table.addField(primaryKeyValue, getTableMetaName() + "-" + primaryKeyValue)
                    .addField("lastUpdated", MomentJS.getCurrentUnixTime());
            
            LocalStorage.setBean(getTableMetaName() + "-" + primaryKeyValue, row);
            LocalStorage.setBean(getTableMetaName(), table.toJSON());
        }
        
        @Override
        public String findByPrimaryKey(String value) {
            MapBuilder table = MapBuilder.query(LocalStorage.getBean(getTableMetaName()));
            if (table.get().containsKey(value)) {
                return LocalStorage.getBean(getTableMetaName() + "-" + value);
            }
            return null;
        }
        
        @Override
        public void delete(String tableName) {
        }
        
    }

    /**
     * For single row operations no Array operation allowed
     */
    public interface IndexedTable {
        
        public boolean exists(String name);
        
        public void createTable();

        /**
         * Saves a row in that table
         *
         * @param primaryKeyValue
         * @param data
         */
        public void save(String primaryKeyValue, String data);

        /**
         *
         * @return Returns a row as Map finding by value of the primary field
         */
        public String findByPrimaryKey(String primaryKeyValue);
        
        public void delete(String tableName);
    }
    
}

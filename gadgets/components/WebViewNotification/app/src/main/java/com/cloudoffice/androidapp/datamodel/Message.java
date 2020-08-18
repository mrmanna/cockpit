package com.cloudoffice.androidapp.datamodel;

public class Message {
    String itemName;
    String createdBy;

    @Override
    public String toString() {
        return "Message{" +
                "itemName='" + itemName + '\'' +
                ", createdBy='" + createdBy + '\'' +
                '}';
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }


}
